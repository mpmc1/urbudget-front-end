import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { budget } from 'src/app/shared/models/dashboard.model';
import { ServiceRecordService } from 'src/app/shared/service-record.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  modalVisible = false;
  budgetForm: FormGroup; 
  

  constructor(private formBuilder: FormBuilder, private budgetService:ServiceRecordService, private dashboard:DashboardComponent) {
    this.budgetForm = this.formBuilder.group({
      year: ['', Validators.required],
      ammount: ['', Validators.required],
      monthIncomes: ['', Validators.required],
      monthOutcomes: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.budgetService.getBudget().subscribe({
      next: (budget:budget) => {
        this.budgetService.setBudget(budget);
      }
    })    
  }
  

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  saveBudget() {
    this.budgetService.crearBudget(this.budgetForm.value).subscribe({
      next(budget:budget){
      alert(budget.data.year + budget.data.ammount);
      }
    })
  }


 
}


