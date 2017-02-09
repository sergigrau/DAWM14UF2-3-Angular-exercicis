"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Exercici que mostra diverses activitats gestionades per Angular2
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 08.02.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 08.02.2017
 * - Exercici que mostra diverses activitats gestionades per Angular2
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
var core_1 = require("@angular/core");
/// Servei de dades local
var ActivitatService = (function () {
    function ActivitatService() {
        this.arrayActivitats = [];
        var activitats = [
            {
                nom: "Pràctica Java",
                termini: "Feb 1 2017",
                nombrePomodoros: 1
            }, {
                nom: "Pràctica AJAX",
                termini: "Mar 24 2017",
                nombrePomodoros: 2
            }, {
                nom: "Pràctica Express / WebSockets / MongoDB",
                termini: "Jun 25 2017",
                nombrePomodoros: 1
            }, {
                nom: "Examen Java EE",
                termini: "Jun 26 2017",
                nombrePomodoros: 3
            }
        ];
        this.arrayActivitats = activitats.map(function (activitat) {
            return {
                nom: activitat.nom,
                termini: new Date(activitat.termini),
                enCua: false,
                nombrePomodoros: activitat.nombrePomodoros
            };
        });
    }
    return ActivitatService;
}());
exports.ActivitatService = ActivitatService;
///Pipe personalitzada
var FormatDataPipe = (function () {
    function FormatDataPipe() {
    }
    FormatDataPipe.prototype.transform = function (minutsTotals) {
        var minuts = minutsTotals % 60;
        var hores = Math.floor(minutsTotals / 60);
        return hores + "h:" + minuts + "m";
    };
    return FormatDataPipe;
}());
FormatDataPipe = __decorate([
    core_1.Pipe({
        name: 'formatData'
    })
], FormatDataPipe);
exports.FormatDataPipe = FormatDataPipe;
var EnCuaPipe = (function () {
    function EnCuaPipe() {
    }
    EnCuaPipe.prototype.transform = function (activitats) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return activitats.filter(function (activitat) {
            return activitat.enCua === args[0];
        });
    };
    return EnCuaPipe;
}());
EnCuaPipe = __decorate([
    core_1.Pipe({
        name: 'enCua',
        pure: false
    })
], EnCuaPipe);
exports.EnCuaPipe = EnCuaPipe;
///
/// Component Icona
var ActivitatIconsComponent = (function () {
    function ActivitatIconsComponent() {
        this.icons = [];
    }
    ActivitatIconsComponent.prototype.ngOnInit = function () {
        this.icons.length = this.activitat.nombrePomodoros;
        this.icons.fill({ nom: this.activitat.nom });
    };
    return ActivitatIconsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ActivitatIconsComponent.prototype, "activitat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ActivitatIconsComponent.prototype, "mida", void 0);
ActivitatIconsComponent = __decorate([
    core_1.Component({
        selector: 'pomodoro-activitat-icons',
        template: "<img *ngFor=\"let icon of icons\"\n                  src=\"/img/ok.png\"\n                  width=\"{{mida}}\">"
    })
], ActivitatIconsComponent);
exports.ActivitatIconsComponent = ActivitatIconsComponent;
/// Component principal
var E01_Component = (function () {
    function E01_Component() {
        this.totalsEnCua = {
            '=0': 'Cap activitat',
            '=1': 'Una activitat',
            'other': '# activitats'
        };
        var activitatService = new ActivitatService();
        this.activitats = activitatService.arrayActivitats;
        this.avui = new Date();
        this.actualitzarPomodoros();
    }
    E01_Component.prototype.toggleactivitat = function (activitat) {
        activitat.enCua = !activitat.enCua;
        this.actualitzarPomodoros();
    };
    E01_Component.prototype.actualitzarPomodoros = function () {
        this.nombrePomodoros = this.activitats
            .filter(function (activitat) { return activitat.enCua; })
            .reduce(function (pomodoros, queuedactivitat) {
            return pomodoros + queuedactivitat.nombrePomodoros;
        }, 0);
    };
    return E01_Component;
}());
E01_Component = __decorate([
    core_1.Component({
        selector: 'aplicacio',
        styleUrls: ['/app/E01_activitats.css'],
        templateUrl: '/app/E01_llista.html'
    }),
    __metadata("design:paramtypes", [])
], E01_Component);
exports.E01_Component = E01_Component;
//# sourceMappingURL=E01_activitats.component.js.map