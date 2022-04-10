import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {
  artist : any;
  albums : any;

  constructor(private route: ActivatedRoute, private _musicService : MusicDataService) { }
  id = this.route.snapshot.params['id'];
  
  formatDate = formatDate;
  
  ngOnInit(): void {
    console.log(this.id);
    this._musicService.getArtistById(this.id)
                      .subscribe(data => this.artist = data);

    this._musicService.getAlbumsByArtistId(this.id)
                      .subscribe(data => this.albums = data.items.filter(function(item, index) {
                        return data.items.indexOf(item) == index;
                      }))
  }

}
