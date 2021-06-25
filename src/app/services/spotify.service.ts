import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private __albumData:HttpClient) { 
    console.log("Spotify Service Ready")
  }

  getQuery( query:string , type: string ){
    const url= `https://api.spotify.com/v1/${ query }`;

    const headers  = new HttpHeaders({
      'Authorization':'Bearer BQAzXJuWguQr54h2US-asVXWJhF6HmIiPhecjNQ-LawtuUF_4qg8jGBpIi69v062c6aRip65_Ow-VroJu7c',
      'Accept': 'application/json'
    })

     if ( type === "albumQuery"){
       return this.__albumData.get(url, { headers });
     } else if ( type === "artistQuery"){
      const headers  = new HttpHeaders({
        'Authorization':'Bearer BQAzXJuWguQr54h2US-asVXWJhF6HmIiPhecjNQ-LawtuUF_4qg8jGBpIi69v062c6aRip65_Ow-VroJu7c',
      })
       return this.__albumData.get(url, { headers })
     } else {
       console.error(Error);
     }
  }

// Brings Baekhyun's Albums only
    getAlbums(){  
      return this.getQuery(`artists/4ufh0WuMZh6y4Dmdnklvdl/albums`, 'albumQuery') 
                  .pipe(map( data => data['items']));
    }

// Brings any artist on search component
    getArtists( keyword: string){
      return this.getQuery(`search?q=${ keyword }&type=artist&limit=15`, 'artistQuery')
                  .pipe(map( data => data['artists'].items)); 
  }

//Brings back one artist when clicking on their card 
  getArtist( id: string ){
    return this.getQuery(`artists/${id}`, 'artistQuery')
  }


//Brings back an artist's top tracks given the artist's ID
  getTopTracks ( id: string ){
    return this.getQuery(`artists/${id}/top-tracks?country=us`, 'artistQuery')
                .pipe(map( data => data['tracks']));
  }

}
