import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRecordService } from 'src/app/shared/service-record.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{  
  public year = this.budgetService.budget.value.data.year;
  public ammount = this.budgetService.budget.value.data.ammount; 

  constructor(private router: Router, private budgetService: ServiceRecordService) {    
  }  

  test(){
    console.log(this.budgetService.budget.value.data.id)
    console.log(this.budgetService.budget.value.data.year)
    console.log(this.budgetService.budget.value.data.ammount)
    console.log(this.budgetService.budget.value.data.mothOutcomes)
    console.log(this.budgetService.budget.value.data.monthIncomes)
  }
 

  
 

}
