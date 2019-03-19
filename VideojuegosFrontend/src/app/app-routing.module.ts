import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GameEditComponent } from './game-edit/game-edit.component';

const appRoutes: Routes = [
  // {path:'', }
  { path: '', component: ListaJuegosComponent },
  { path: 'game/:_id', component: GameDetailComponent },
  { path: 'create-game', component: GameAddComponent },
  { path: 'edit-game/:id', component: GameEditComponent },

  { path: '**', component: ListaJuegosComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
