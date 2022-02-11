import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {WisdomModule} from "common";

import {ExampleComponent} from "./example.component";

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    WisdomModule,
    TranslateModule
  ],
  exports: [
    ExampleComponent
  ]
})
export class ExampleModule { }
