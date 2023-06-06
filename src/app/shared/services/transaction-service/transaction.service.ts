import { Injectable } from '@angular/core';
import { transaction, transactionForm } from '../../models/dashboard.model'; 
import { ServiceRecordService } from '../budget-service/service-record.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private cadena = 'api/v1/transaction/users/' + localStorage.getItem('user') + '/budgets/' + localStorage.getItem('budget') + '/transactions';
  constructor(private budgetService: ServiceRecordService, private http: HttpClient) { }

  transaction: BehaviorSubject<transaction> = new BehaviorSubject<transaction>({
    data: [],
    message: []
  }); 

  getTransactions(){
    return this.http.get<any>(this.cadena);
  }

  createTransaction(transactionForm:transactionForm){
    return this.http.post<any>(this.cadena,transactionForm)
  }

  setTransactions(transaction:transaction){
    this.transaction.next(transaction);
  }




}
