import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  onClose: Subject<boolean>;
  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  closeModal(value: boolean) {
    this.onClose.next(value);
    this.modalRef.hide();
  }

}
