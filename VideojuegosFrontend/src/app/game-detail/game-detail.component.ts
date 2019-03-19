import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GameService } from '../game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  providers: [GameService]
})
export class GameDetailComponent implements OnInit {

  public title: String;
  public errorMessage: String;
  public game: Game;

  constructor(private _gameService: GameService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getGame();
  }

  getGame() {
    this._route.params.forEach((params: Params) => {
      let id = this._route.snapshot.params['_id']
      console.log('OK game id:' + id);
      this._gameService.getGame(id).subscribe(
        response => {
          this.game = response['data'];
          console.log('game:' + this.game);
          if (!this.game) {
            this._router.navigate(['/']);
          }
        },
        error => {
          this.errorMessage = <any>error;
          if (this.errorMessage != null) {
            console.log(this.errorMessage);
            alert('Error en la peticion');
          }
        }
      );
    });

  }


}
