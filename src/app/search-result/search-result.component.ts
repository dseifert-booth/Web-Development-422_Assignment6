import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  results : any;
  searchQuery : String = "";

  constructor(private route: ActivatedRoute, private _musicService : MusicDataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(search => {
      this.searchQuery = search['q']
      this._musicService.searchArtists(this.searchQuery)
                        .subscribe(data => this.results = data.artists.items.filter(function(item) {
                          return item.images.length > 0;
                        }))
    });
  }

}
