import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistData: any[] = [];
  loading: boolean;

  constructor( private _data:SpotifyService) { 
    
  }
  
  searchAlbums(keyword:string){
    console.log(keyword)
    this.loading = true;
    this._data.getArtists(keyword)
      .subscribe( (data ) =>{
        this.artistData = data;
        this.loading = false;
      })
  }

}