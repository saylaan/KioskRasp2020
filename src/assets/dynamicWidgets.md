import {CompactComponent} from './sections/compact/compact.component';
import {DisplayGridComponent} from './sections/displayGrid/displayGrid.component';
import {DragComponent} from './sections/drag/drag.component';
import {DynamicWidgetsComponent} from './sections/dynamicWidgets/dynamicWidgets.component';
import {ParentDynamicComponent} from './sections/dynamicWidgets/parentDynamic.component';
import {WidgetAComponent} from './sections/dynamicWidgets/widgetA.component';
import {WidgetBComponent} from './sections/dynamicWidgets/widgetB.component';
import {WidgetCComponent} from './sections/dynamicWidgets/widgetC.component';
import {EmptyCellComponent} from './sections/emptyCell/emptyCell.component';
import {GridEventsComponent} from './sections/gridEvents/gridEvents.component';
import {GridMarginsComponent} from './sections/gridMargins/gridMargins.component';
import {GridSizesComponent} from './sections/gridSizes/gridSizes.component';
import {GridTypesComponent} from './sections/gridTypes/gridTypes.component';
import {HomeComponent} from './sections/home/home.component';
import {ItemsComponent} from './sections/items/items.component';
import {MiscComponent} from './sections/misc/misc.component';
import {PushComponent} from './sections/push/push.component';
import {ResizeComponent} from './sections/resize/resize.component';
import {SwapComponent} from './sections/swap/swap.component';### Simple solution
What is implemented here is a `parentDynamicComponent` which is inserted in all widgets and inside it is using `*ngIf` to initialize the correct widget depending on it's `type`.
To communicate resize, drag and other events added code with EventEmitters.
For more info look at source code of this demo.

### Alternative
You can load dynamic components in Angular4+ with the help of [ng-dynamic-component library](https://www.npmjs.com/package/ng-dynamic-component) 
