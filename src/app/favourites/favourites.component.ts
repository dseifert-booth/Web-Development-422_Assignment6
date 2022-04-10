import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites : Array<any>[any];

  constructor(private _musicService : MusicDataService) {}

  ngOnInit(): void {
    this._musicService.getFavourites()
                      .subscribe(data => this.favourites = data.tracks);
  }

  removeFromFavourites(id : any) {
    this._musicService.removeFromFavourites(id)
                      .subscribe(data => this.favourites = data.tracks);
  }

}
