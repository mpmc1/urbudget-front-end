import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  modalVisible = false;
  year = '';
  expectedIncome = '';
  expectedOutcome = '';
  amount = '';

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  saveBudget() {
    console.log('Year:', this.year);
    console.log('Amount:', this.amount);
    console.log('Expected Income:', this.expectedIncome);
    console.log('Expected Outcome:', this.expectedOutcome);
    
    this.modalVisible = false;
  }
}
