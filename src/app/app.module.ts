import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContienePipe } from './contiene.pipe';
import { NoContienePipe } from './no-contiene.pipe';
import { ContieneDescripcionPipe } from './contiene-descripcion.pipe';
import { ContieneAutorPipe } from './contiene-autor.pipe';
import { ContieneFechaPipe } from './contiene-fecha.pipe';
import { ContieneNumEjemplaresPipe } from './contiene-num-ejemplares.pipe';
import { ContieneCostoPipe } from './contiene-costo.pipe';
import { NoContieneDescripcionPipe } from './no-contiene-descripcion.pipe';
import { NoContieneAutorPipe } from './no-contiene-autor.pipe';
import { NoContieneFechaPipe } from './no-contiene-fecha.pipe';
import { NoContieneNumEjemplaresPipe } from './no-contiene-num-ejemplares.pipe';
import { NoContieneCostoPipe } from './no-contiene-costo.pipe';
import { IgualPipe } from './igual.pipe';
import { IgualDescripcionPipe } from './igual-descripcion.pipe';
import { IgualAutorPipe } from './igual-autor.pipe';
import { IgualFechaPipe } from './igual-fecha.pipe';
import { IgualNumEjemplaresPipe } from './igual-num-ejemplares.pipe';
import { IgualCostoPipe } from './igual-costo.pipe';
import { IgualNoPipe } from './igual-no.pipe';
import { IgualNoDescripcionPipe } from './igual-no-descripcion.pipe';
import { IgualNoAutorPipe } from './igual-no-autor.pipe';
import { IgualNoFechaPipe } from './igual-no-fecha.pipe';
import { IgualNoNumEjemplaresPipe } from './igual-no-num-ejemplares.pipe';
import { IgualNoCostoPipe } from './igual-no-costo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContienePipe,
    NoContienePipe,
    ContieneDescripcionPipe,
    ContieneAutorPipe,
    ContieneFechaPipe,
    ContieneNumEjemplaresPipe,
    ContieneCostoPipe,
    NoContieneDescripcionPipe,
    NoContieneAutorPipe,
    NoContieneFechaPipe,
    NoContieneNumEjemplaresPipe,
    NoContieneCostoPipe,
    IgualPipe,
    IgualDescripcionPipe,
    IgualAutorPipe,
    IgualFechaPipe,
    IgualNumEjemplaresPipe,
    IgualCostoPipe,
    IgualNoPipe,
    IgualNoDescripcionPipe,
    IgualNoAutorPipe,
    IgualNoFechaPipe,
    IgualNoNumEjemplaresPipe,
    IgualNoCostoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
