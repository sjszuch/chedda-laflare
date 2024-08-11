import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {
  @Input() title!: any;
  @Input() thumb!: any;
  @Input() link!: any;
}
