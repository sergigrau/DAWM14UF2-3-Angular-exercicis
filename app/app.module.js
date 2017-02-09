"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var E01_activitats_component_1 = require("./E01_activitats.component");
var E01_activitats_component_2 = require("./E01_activitats.component");
var E01_activitats_component_3 = require("./E01_activitats.component");
var E01_activitats_component_4 = require("./E01_activitats.component");
var E01_activitats_component_5 = require("./E01_activitats.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        providers: [
            { provide: core_1.LOCALE_ID, useValue: "ca" },
            E01_activitats_component_5.ActivitatService
        ],
        declarations: [
            E01_activitats_component_1.E01_Component,
            E01_activitats_component_2.ActivitatIconsComponent,
            E01_activitats_component_3.FormatDataPipe,
            E01_activitats_component_4.EnCuaPipe
        ],
        bootstrap: [E01_activitats_component_1.E01_Component]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map