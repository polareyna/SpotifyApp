import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']

})
export class ArtistComponent  {

  loadingArtist: boolean;

  artist:any = {};
  topTracks:any = {};

  constructor( private _actRoute: ActivatedRoute,
                private _spotify: SpotifyService) { 

    this.loadingArtist= true;
    this._actRoute.params.subscribe( params =>{
      this.getArtist( params['id']);
      this.getTopTracks( params['id']);
    })
  }

  getArtist( id:string ){
    this.loadingArtist=true;
    this._spotify.getArtist(id)
      .subscribe( artist =>{
        console.log(artist);
        this.artist=artist;
        this.loadingArtist=false;
      })
  }

  getTopTracks( id:string ){
    this.loadingArtist=true;
    this._spotify.getTopTracks(id)
      .subscribe( tracks =>{
        this.topTracks=tracks;
        this.loadingArtist=false;
        console.log("tracks",tracks)
      })
  }
}