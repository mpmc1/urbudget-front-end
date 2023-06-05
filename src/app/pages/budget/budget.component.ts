import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  modalVisible = false;
  budgetForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.budgetForm = this.formBuilder.group({
      year: ['', Validators.required],
      amount: ['', Validators.required],
      monthIncomes: ['', Validators.required],
      monthOutcomes: ['', Validators.required]
    });
  }

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  saveBudget() {
    if (this.budgetForm.valid) {
      console.log('Year:', this.budgetForm.value.year);
      console.log('Amount:', this.budgetForm.value.amount);
      console.log('Expected Income:', this.budgetForm.value.monthIncomes);
      console.log('Expected Outcome:', this.budgetForm.value.monthOutcomes);
      
      this.modalVisible = false;
    }
  }
}
