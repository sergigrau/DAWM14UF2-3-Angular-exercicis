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
import {
  Component, Pipe, Directive,
  NgModule,
  Input, Output,
  ViewEncapsulation,
  EventEmitter,
  PipeTransform,
  OnInit,
  HostListener
} from '@angular/core';

/// interface que representa una Activitat (Model)
interface Activitat {
  nom: string;
  termini: Date;
  enCua: boolean;
  nombrePomodoros: number;
}

/// Servei de dades local
export class ActivitatService {
  public arrayActivitats: Activitat[] = [];

  constructor() {
    const activitats = [
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

    this.arrayActivitats = activitats.map(activitat => {
      return {
        nom: activitat.nom,
        termini: new Date(activitat.termini),
        enCua: false,
        nombrePomodoros: activitat.nombrePomodoros
      };
    });
  }
}


///Pipe personalitzada
@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {
  transform(minutsTotals: number): string {
    let minuts: number = minutsTotals % 60;
    let hores: number = Math.floor(minutsTotals / 60);
    return `${hores}h:${minuts}m`;
  }
}

@Pipe({
  name: 'enCua',
  pure: false
})
export class EnCuaPipe implements PipeTransform {
  transform(activitats: Activitat[], ...args: any[]): Activitat[] {
    return activitats.filter((activitat: Activitat) => {
      return activitat.enCua === args[0];
    });
  }
}



///

/// Component Icona
@Component({
  selector: 'pomodoro-activitat-icons',
  template: `<img *ngFor="let icon of icons"
                  src="/img/ok.png"
                  width="{{mida}}">`
})
export class ActivitatIconsComponent implements OnInit {
  @Input() activitat: Activitat;
  @Input() mida: number;
  icons: Object[] = [];

  ngOnInit() {
    this.icons.length = this.activitat.nombrePomodoros;
    this.icons.fill({ nom: this.activitat.nom });
  }
}

/// Component principal
@Component({
  selector: 'aplicacio',
  styleUrls: ['/app/E01_activitats.css'],
  templateUrl: '/app/E01_llista.html'
})
export class E01_Component {
  avui: Date;
  activitats: Activitat[];
  nombrePomodoros: number;
  totalsEnCua: any = {
    '=0': 'Cap activitat',
    '=1': 'Una activitat',
    'other': '# activitats'
  };

  constructor() {
    const activitatService: ActivitatService = new ActivitatService();
    this.activitats = activitatService.arrayActivitats;
    this.avui = new Date();
    this.actualitzarPomodoros();
  }

  toggleactivitat(activitat: Activitat): void {
    activitat.enCua = !activitat.enCua;
    this.actualitzarPomodoros();
  }

  private actualitzarPomodoros(): void {
    this.nombrePomodoros = this.activitats
      .filter((activitat: Activitat) => activitat.enCua)
      .reduce((pomodoros: number, queuedactivitat: Activitat) => {
        return pomodoros + queuedactivitat.nombrePomodoros;
      }, 0);
  }
}
