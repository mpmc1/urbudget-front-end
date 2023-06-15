import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRecordService } from 'src/app/shared/services/budget-service/service-record.service';
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';

import { budget, individualTransaction, transaction } from 'src/app/shared/models/dashboard.model';

import { TokenService } from 'src/app/shared/services/token-service/token.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{  
  public year = 0;
  public ammount = 0; 
  transactions:individualTransaction[]|undefined;

  
  ngOnInit(): void {
      this.budgetService.getBudget().subscribe({
        next: (budget:budget) =>{
          this.budgetService.setBudget(budget);
          this.getAndSetTransactions();
          this.year = budget.data.year;
          this.ammount = budget.data.ammount; 
        }
      });
      
  }

  constructor(private router: Router, private budgetService: ServiceRecordService, private transaction: TransactionService, private tokenService:TokenService) {    
  }  

  getAndSetTransactions(){    
    this.transaction.getTransactions().subscribe({
      next: (transaction:transaction)=>{
        this.transaction.setTransactions(transaction);
        this.transactions = transaction.data;
      }
    });
    
  }

  onLogout():void{
    this.tokenService.logout();
    this.router.navigate(['/login']);
  }

}



