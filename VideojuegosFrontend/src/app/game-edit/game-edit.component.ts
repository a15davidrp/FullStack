import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameService } from '../game.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-game-edit',
  templateUrl: '../game-add/game-add.component.html',
  styleUrls: ['../game-add/game-add.component.css'],
})
export class GameEditComponent implements OnInit {

  public title: String;
  public errorMessage: String;
  public game: Game;


  constructor(private _gameService: GameService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = 'Editar coche';
  }


  ngOnInit() {
    this.game = new Game('', '', 0);
    this.getGame();
  }


  getGame() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];
      console.log('OK game id:' + id);
      this._gameService.getGame(id).subscribe(
        response => {
          this.game = response['data'];
          console.log('game:' + this.game);
          // this.loading = false;
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


  public onSubmit() {
    console.log(this.game);
    this._gameService.editGame(this.game._id, this.game).subscribe(
      response => {
        alert('Modificacion correcta')
        this._router.navigate(['/']);
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('Error en la peticion');
        }
      }
    );
  }
}
