import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//App Routes
import { ROUTES } from './app.routes';
// Spotify Service
// import { SpotifyService } from './services/spotify.service';
// Http Petitions
import { HttpClientModule} from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
// No image pipe for search component
import { NoImagePipe } from './pipes/no-image.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    CardsComponent,
    LoadingComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES,{useHash: true})
  ],
  providers: [
    // SpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
