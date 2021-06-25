import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  albumList: any[] = [];
  loading: boolean;

  constructor(private  data:SpotifyService ) {

    this.loading= true;
    
    this.data.getAlbums()
        .subscribe( (data:any) => {
          this.albumList = data;
          this.loading = false;
        })
 
  }
}