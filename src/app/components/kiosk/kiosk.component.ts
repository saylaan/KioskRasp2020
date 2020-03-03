import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

import {
  CompactType,
  DisplayGrid, GridsterComponentInterface,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridsterItemComponentInterface,
  GridsterPush,
  GridType
} from 'angular-gridster2';

@Component({
  selector: 'app-api',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class KioskComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  itemToPush: GridsterItemComponent;

  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemResized', item, itemComponent);
  }

  static itemInit(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemInitialized', item, itemComponent);
  }

  static itemRemoved(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemRemoved', item, itemComponent);
  }

  static itemValidate(item: GridsterItem) {
    return item.cols > 0 && item.rows > 0;
  }

  static gridInit(grid: GridsterComponentInterface) {
    console.info('gridInit', grid);
  }

  static gridDestroy(grid: GridsterComponentInterface) {
    console.info('gridDestroy', grid);
  }

  static gridSizeChanged(grid: GridsterComponentInterface) {
    console.info('gridSizeChanged', grid);
  }

  ngOnInit() {
    this.options = {
      /* TYPE GRID */
      gridType: GridType.Fit,
      compactType: CompactType.CompactUp,
      displayGrid: DisplayGrid.None,
      /* ITEM MOVE / SIZE / DRAG*/
      draggable: {
        enabled: false
      },
      resizable: {
        // delayStart: 0,
        enabled: false,
        // start: KioskComponent.eventStart,
        // stop: KioskComponent.eventStop,
        // handles: {
        //   s: true,
        //   e: true,
        //   n: true,
        //   w: true,
        //   se: true,
        //   ne: true,
        //   sw: true,
        //   nw: true
        // }
      },
      /* PUSH */
      pushItems: false,
      // pushDirections: {north: true, east: true, south: true, west: true},
      // pushResizeItems: false,
      /* SWAP */
      // swapWhileDragging: false,
      // swap: false,
      /* EMPTY CELLS */
      // enableEmptyCellClick: false,
      // enableEmptyCellContextMenu: false,
      // enableEmptyCellDrop: false,
      // enableEmptyCellDrag: false,
      // enableOccupiedCellDrop: false,
      // emptyCellClickCallback: this.emptyCellClick.bind(this),
      // emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      // emptyCellDropCallback: this.emptyCellClick.bind(this),
      // emptyCellDragCallback: this.emptyCellClick.bind(this),
      // emptyCellDragMaxCols: 50,
      // emptyCellDragMaxRows: 50,
      /* EVENT ACTION*/
      // initCallback: KioskComponent.gridInit,
      // destroyCallback: KioskComponent.gridDestroy,
      // gridSizeChangedCallback: KioskComponent.gridSizeChanged,
      // itemChangeCallback: KioskComponent.itemChange,
      // itemResizeCallback: KioskComponent.itemResize,
      // itemInitCallback: KioskComponent.itemInit,
      // itemRemovedCallback: KioskComponent.itemRemoved,
      // itemValidateCallback: KioskComponent.itemValidate,
      /* MARGIN*/
      margin: 1,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      /* SIZE */
      // minCols: 1,
      // maxCols: 100,
      // minRows: 1,
      // maxRows: 100,
      // maxItemCols: 100,
      // minItemCols: 1,
      // maxItemRows: 100,
      // minItemRows: 1,
      // maxItemArea: 2500,
      // minItemArea: 1,
      // defaultItemCols: 1,
      // defaultItemRows: 1
      /* TYPE */
      // fixedColWidth: 105,
      // fixedRowHeight: 105,
      // keepFixedHeightInMobile: false,
      // keepFixedWidthInMobile: false,
      // mobileBreakpoint: 640,
      /* MISC */
      // disableWindowResize: false,
      // scrollToNewItems: false,
      // disableWarnings: false,
      // ignoreMarginInRow: false
    };

    this.dashboard = [
      {cols: 3, rows: 3, y: 0, x: 0, initCallback: this.initItem.bind(this)},
      {cols: 3, rows: 3, y: 0, x: 3},
      {cols: 2, rows: 2, y: 3, x: 0},
      {cols: 4, rows: 1, y: 3, x: 2},
      {cols: 4, rows: 1, y: 4, x: 2},
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  // destroy() {
  //   this.remove = !this.remove;
  // }

  initItem(item: GridsterItem, itemComponent: GridsterItemComponent) {
    this.itemToPush = itemComponent;
  }

  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    console.info('empty cell click', event, item);
    this.dashboard.push(item);
  }
  pushItem() {
    const push = new GridsterPush(this.itemToPush); // init the service
    this.itemToPush.$item.rows += 4; // move/resize your item
    if (push.pushItems(push.fromNorth)) { // push items from a direction
      push.checkPushBack(); // check for items can restore to original position
      push.setPushedItems(); // save the items pushed
      this.itemToPush.setSize();
      this.itemToPush.checkItemChanges(this.itemToPush.$item, this.itemToPush.item);
    } else {
      this.itemToPush.$item.rows -= 4;
      push.restoreItems(); // restore to initial state the pushed items
    }
    push.destroy(); // destroy push instance
    // similar for GridsterPushResize and GridsterSwap
  }
}
