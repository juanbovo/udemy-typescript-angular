import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoDetalleComponent } from './pedido-detalle/pedido-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    PedidoComponent,
    PedidoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
