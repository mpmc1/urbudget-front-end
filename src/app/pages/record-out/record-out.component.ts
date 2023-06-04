import { Component } from '@angular/core';

@Component({
  selector: 'app-record-out',
  templateUrl: './record-out.component.html',
  styleUrls: ['./record-out.component.css']
})
export class RecordOutComponent {
  modalVisible = false;
  outcomesModalVisible = false;
  amount = '';
  outcomesDescription = '';

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }



  openOutcomesModal() {
    this.outcomesModalVisible = true;
  }

  closeOutcomesModal() {
    this.outcomesModalVisible = false;
  }

  saveOutcomes() {
    console.log('Amount:', this.amount);
    console.log('Description:', this.outcomesDescription);
    
    this.outcomesModalVisible = false;
  }
}