import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { transaction } from 'src/app/shared/models/dashboard.model';
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';

@Component({
  selector: 'app-record-out',
  templateUrl: './record-out.component.html',
  styleUrls: ['./record-out.component.css']
})
export class RecordOutComponent implements OnInit{


  modalVisible = false;
  outcomesModalVisible = false;
  transactionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private transactionService:TransactionService) {
    this.transactionForm = this.formBuilder.group({
      ammount: ['', Validators.required],
      description: ['', Validators.required],      
    });
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe({
      next: (transaction:transaction)=>{
        this.transactionService.setTransactions(transaction);
      }
    });
    
  }
  

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
    this.transactionService.createTransaction(this.transactionForm.value).subscribe({
      next(transaction:transaction){
      alert('Enviada');
      }
    })
  }
}