import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album : any;

  formatDate = formatDate;

  constructor(private snackBar : MatSnackBar, private route: ActivatedRoute, private _musicService : MusicDataService) { }
  id = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this._musicService.getAlbumById(this.id)
                      .subscribe(data => this.album = data)
  }

  addToFavourites(trackID : any) {
    this._musicService.addToFavourites(trackID)
                      .subscribe(
                        () => { 
                          this.snackBar.open("Adding to Favourites...", "Done", { duration: 1500 })
                        },
                        () => {
                          this.snackBar.open("Adding to Favourites...", "Unable to add song to Favourites", { duration: 1500 })
                        }
                      );
  }

}
