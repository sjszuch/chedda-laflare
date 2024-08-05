import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogStreamingComponent } from '../dialog-streaming/dialog-streaming.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogStreamingComponent, {
      width: '250px',
      data: { }
    });
  }
}
