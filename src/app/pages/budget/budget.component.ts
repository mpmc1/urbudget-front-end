import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { budget } from 'src/app/shared/models/dashboard.model';
import { ServiceRecordService } from 'src/app/shared/services/budget-service/service-record.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent{
  modalVisible = false;
  budgetForm: FormGroup; 
  

  constructor(private formBuilder: FormBuilder, private budgetService:ServiceRecordService, private dashboard:DashboardComponent, private toast:ToastrService ) {
    this.budgetForm = this.formBuilder.group({
      year: ['', Validators.required],
      ammount: ['', Validators.required],
      monthIncomes: ['', Validators.required],
      monthOutcomes: ['', Validators.required]
    });
  }
  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.budgetService.getBudget().subscribe({
      next: (budget:budget) =>{
        this.budgetService.setBudget(budget);
      }
    });
    this.dashboard.year = this.budgetService.budget.value.data.year;
    this.dashboard.ammount = this.budgetService.budget.value.data.ammount;

  }

  saveBudget() {
    this.budgetService.crearBudget(this.budgetForm.value).subscribe({
      next: (budget:budget) =>{
        this.budgetService.setBudget(budget);
        this.toast.success("Budget Recorded")
      },
      error:(err)=>{
        console.error(err);
        this.toast.error("Cannot record budget")
        
      }
    });
  }


 
}


