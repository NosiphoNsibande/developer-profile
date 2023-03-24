/*!
 * Software Developer Profile
 * Author:  Nosipho Nsibande
 * Mail:    nosiphonsibande54@gmail.com
 */
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile';


  constructor(private modalService: NgbModal) {

  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
