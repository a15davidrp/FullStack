import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GameService } from '../game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css'],
  providers: [GameService]
})


export class GameAddComponent implements OnInit {

  public title: String;
  public errorMessage: String;
  public loading: boolean;
  public game: Game;


  constructor(private _carService: GameService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = 'Crear nuevo juego';
  }


  ngOnInit() {
    this.game = new Game('', '', 0);
    console.log(this.game);
  }


  public onSubmit() {
    this._carService.addGame(this.game).subscribe(
      response => {

        if (!response['game']) {
          alert('Error en el servidor');
        } else {
          this.game = response['game'];
          this._router.navigate(['/game', this.game._id]);
        }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          alert('Error en la peticion');
        }
      }
    );
  }
}

