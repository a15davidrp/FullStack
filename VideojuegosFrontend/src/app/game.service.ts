import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './models/game';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url: String = 'http://localhost:3678/api/';

  constructor(private _http: HttpClient) {
  }

  getGames() {
    return this._http.get(this.url + 'games')
  }

  getGame(id: String) {
    return this._http.get(this.url + 'game/' + id);
  }

  addGame(game: Game) {
    const json = JSON.stringify(game);
    const params = json;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + 'game', params, { headers: headers });
  }

  editGame(id: String, game: Game) {
    const json = JSON.stringify(game)

    const params = json;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(this.url + 'game/' + id, params, { headers: headers });

  }

  deleteGame(id: String) {
    return this._http.delete(this.url + "game/" + id)
  }
}
