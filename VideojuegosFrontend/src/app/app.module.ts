import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GameMenuComponent } from './game-menu/game-menu.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { routing, appRoutingProviders } from './app-routing.module';
import { GameAddComponent } from './game-add/game-add.component';
import { GameEditComponent } from './game-edit/game-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaJuegosComponent,
    GameMenuComponent,
    GameDetailComponent,
    GameAddComponent,
    GameEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    appRoutingProviders,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
