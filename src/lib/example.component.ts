import {Component, OnInit} from "@angular/core";
import { HttpContext } from "@angular/common/http";
import { USE_API_URL, USE_LOADER } from "common";

/** Minimalistic example Component. */
@Component({
  templateUrl: "example.component.html"
})
export class ExampleComponent {

  api_url: string = "/takeCsv";

  value_name: string = "fileList";

  httpContext: HttpContext = new HttpContext().set(USE_API_URL, true).set(USE_LOADER, true)


  
}
