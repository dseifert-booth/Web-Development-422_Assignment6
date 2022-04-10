import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { MusicDataService } from '../music-data.service'; 

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {
  releases : any;
  formatDate = formatDate;

  constructor(private _musicService : MusicDataService) {
    
  }

  ngOnInit(): void {
    this._musicService.getNewReleases()
                      .subscribe(data => this.releases = data.albums.items);
  }

}
