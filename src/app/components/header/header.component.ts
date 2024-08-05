import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogStreamingComponent } from '../dialog-streaming/dialog-streaming.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogStreamingComponent, {
      width: '250px',
      data: { }
    });
  }

}
