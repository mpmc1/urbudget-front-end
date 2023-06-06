import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRecordService } from 'src/app/shared/services/budget-service/service-record.service';
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';
import { individualTransaction } from 'src/app/shared/models/dashboard.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{  
  public year = this.budgetService.budget.value.data.year;
  public ammount = this.budgetService.budget.value.data.ammount; 
  public ammountArr: string[] = [];
  public descArr: string[] = [];
  public dateArr: Date[] = [];
  prueba:string='';
  aux:string='';

  model: BehaviorSubject<individualTransaction> = new BehaviorSubject<individualTransaction>({
    id: '',
    dateOfTransaction: new Date,
    ammount: 0, 
    description: '', 
    budget: {}
  })
  

  constructor(private router: Router, private budgetService: ServiceRecordService, private transaction: TransactionService) {    
  }  

  test(){    
    for(let i = 0; i<this.transaction.transaction.value.data.length;i++){
      this.prueba = JSON.stringify(this.transaction.transaction.value.data[i]).slice(1, -1);
     // this.model = fromJson(this.prueba);
      //this.ammountArr.push(this.aux);
      /*console.log(this.model.value.id);*/

      /* this.prueba.value.ammount);
      
      this.descArr.push(this.prueba.value.description);
      this.dateArr.push(this.prueba.value.dateOfTransaction); */
    }    
    console.log(this.ammountArr[0]);
    console.log(this.descArr);
    console.log(this.dateArr);
  }
  

}



