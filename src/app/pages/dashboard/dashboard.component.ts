import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRecordService } from 'src/app/shared/services/budget-service/service-record.service';
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';

import { budget, individualTransaction, transaction } from 'src/app/shared/models/dashboard.model';
import { BehaviorSubject} from 'rxjs';

import { TokenService } from 'src/app/shared/services/token-service/token.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{  
  public year = 0;
  public ammount = 0; 
  public ammountArr: string[] = [];
  public descArr: string[] = [];
  public dateArr: Date[] = [];
  public ammountArrAux: string[] = [];
  public descArrAux: string[] = [];
  public dateArrAux: Date[] = [];
  

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
      this.budgetService.getBudget().subscribe({
        next: (budget:budget) =>{
          this.budgetService.setBudget(budget);
        }
      });
    this.year = this.budgetService.budget.value.data.year;
    this.ammount = this.budgetService.budget.value.data.ammount; 
  }

  constructor(private router: Router, private budgetService: ServiceRecordService, private transaction: TransactionService, private tokenService:TokenService) {    
  }  

  test(){    
    this.transaction.getTransactions().subscribe({
      next: (transaction:transaction)=>{
        this.transaction.setTransactions(transaction);
      }
    });
    
    
    
    for (let i of this.transaction.transaction.value.data.values()){      
      this.ammountArrAux.push(JSON.parse(JSON.stringify(i)).ammount);   
      this.descArrAux.push(JSON.parse(JSON.stringify(i)).description);
      this.dateArrAux.push(JSON.parse(JSON.stringify(i)).dateOfTransaction)      
    }
    this.ammountArr = this.ammountArrAux;
    this.descArr = this.descArrAux;
    this.dateArr = this.dateArrAux;

    console.log(this.ammountArr);
    console.log(this.descArr);
    console.log(this.dateArr);

    this.ammountArrAux = [];
    this.descArrAux = [];
    this.dateArrAux = [];   
    
  }

  onLogout():void{
    this.tokenService.logout();
    this.router.navigate(['/login']);
  }

}



