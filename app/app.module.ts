import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { E01_Component } from './E01_activitats.component';
import { ActivitatIconsComponent } from './E01_activitats.component';
import { FormatDataPipe } from './E01_activitats.component';
import { EnCuaPipe } from './E01_activitats.component';
import { ActivitatService } from './E01_activitats.component';


@NgModule({
  imports: [BrowserModule],
  providers: [
    { provide: LOCALE_ID, useValue: "ca" },
    ActivitatService],
  declarations: [
    E01_Component,
    ActivitatIconsComponent,
    FormatDataPipe,
    EnCuaPipe],
  bootstrap: [E01_Component]
})
export class AppModule { }
