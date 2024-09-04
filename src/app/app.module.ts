import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

import {MatDialogModule} from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogStreamingComponent } from './components/dialog-streaming/dialog-streaming.component';
import { ReleasesComponent } from './components/releases/releases.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { TourInfoComponent } from './components/tour-info/tour-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    DialogStreamingComponent,
    ReleasesComponent,
    SongCardComponent,
    TourInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
