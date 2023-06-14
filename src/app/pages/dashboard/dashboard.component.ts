import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRecordService } from 'src/app/shared/services/budget-service/service-record.service';
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';
import { individualTransaction, transaction } from 'src/app/shared/models/dashboard.model';
import { BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{  
  public year = this.budgetService.budget.value.data.year;
  public ammount = this.budgetService.budget.value.data.ammount; 
  public ammountArr: string[] = [];
  public descArr: string[] = [];
  public dateArr: Date[] = [];
  prueba:string='';
  aux:string='';
  /*
  individual: BehaviorSubject<individualTransaction> = new BehaviorSubject<individualTransaction>({
    id: '',
    dateOfTransaction: new Date,
    ammount: 0, 
    description: '', 
    budget: {}
  })
  */  


  
  ngOnInit(): void {
      this.budgetService.getBudget();
  }

  constructor(private router: Router, private budgetService: ServiceRecordService, private transaction: TransactionService) {    
  }  

  test(){    
    this.transaction.getTransactions().subscribe({
      next: (transaction:transaction)=>{
        this.transaction.setTransactions(transaction);
      }
    });
    
    for (let i of this.transaction.transaction.value.data.values()){
      this.ammountArr.push(JSON.parse(JSON.stringify(i)).ammount);   
      this.descArr.push(JSON.parse(JSON.stringify(i)).description);
      this.dateArr.push(JSON.parse(JSON.stringify(i)).dateOfTransaction)      
    }
    console.log(this.ammountArr);
    console.log(this.descArr);
    console.log(this.dateArr);
    
    
    //for(let i = 0; i<this.transaction.transaction.value.data.length;i++){
      //this.individual = JSON.parse(this.transaction.transaction.value.data[i]);
      //console.log(this.transaction.transaction.value.data[i]);
      //this.model = this.prueba; 
      //this.ammountArr.push(this.aux);
      /*console.log(this.model.value.id);*/

      /* this.prueba.value.ammount);
      
      this.descArr.push(this.prueba.value.description);
      this.dateArr.push(this.prueba.value.dateOfTransaction); */
    //}  
    /*  
    console.log(this.ammountArr);
    console.log(this.descArr);
    console.log(this.dateArr);
    */
    
  }
  

}



