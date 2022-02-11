/*
 * Public API Surface of example
 */

import {WisdomInterface} from "common";

import {ExampleComponent} from "./lib/example.component";
import de_DE from "./lib/i18n/de_DE";
import en_US from "./lib/i18n/en_US";

export const wisdomInterface: WisdomInterface = {
  path: "example",
  scopes: ["example"],
  entryComponent: ExampleComponent,
  translations: {
    de_DE,
    en_US
  }
}

export * from './lib/example.service';
export * from './lib/example.component';
export * from './lib/example.module';
