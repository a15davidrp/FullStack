import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
/*import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';*/

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  public games: Game[]
  public title: String;
  public errorMessage: String;

  constructor(private _gameService: GameService, private _router: Router) { }

  ngOnInit() {
    this.title = 'Listado de juegos';
    this._gameService.getGames().subscribe(
      result => {
        console.log('OK:' + result);
        this.games = result['data'];
        if (!this.games) {
          alert('error en el servidor');
        }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('Error en la peticion');
        }
      }
    )
  }

  borrarJuego(id: String) {
    this._gameService.deleteGame(id).subscribe(
      result => {
        this._gameService.getGames();
        window.location.reload();
      },
      error => {
        alert('Error al intentar borrar el coche')
      }
    )
  }
}
