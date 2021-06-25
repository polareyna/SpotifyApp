import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() items: any[] = []

  constructor(private _router:Router) { }
  
  goToArtistProfile( item : any ){
    let artistId: any;
    if(item.type === 'artist'){
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this._router.navigate(['/artist', artistId]);
  }

}