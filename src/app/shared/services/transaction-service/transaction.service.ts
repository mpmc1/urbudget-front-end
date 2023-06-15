import { Injectable } from '@angular/core';
import { transaction, transactionForm } from '../../models/dashboard.model'; 
import { ServiceRecordService } from '../budget-service/service-record.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private cadena: string = '';
  constructor(private budgetService: ServiceRecordService, private http: HttpClient) { }

  transaction: BehaviorSubject<transaction> = new BehaviorSubject<transaction>({
    data: [],
    message: []
  }); 

  transactionChangeListener:BehaviorSubject<boolean> = new BehaviorSubject(false)

  getTransactions(budgetId?:string){
    this.cadena = `api/v1/transaction/users/${localStorage.getItem('user')}/budgets/${budgetId ? budgetId :localStorage.getItem('budget')}/transactions`;
    return this.http.get<transaction>(this.cadena??'');
  }

  createTransaction(transactionForm:transactionForm){
    this.cadena = 'api/v1/transaction/users/' + localStorage.getItem('user') + '/budgets/' + localStorage.getItem('budget') + '/transactions';
    return this.http.post<any>(this.cadena,transactionForm)
  }

  setTransactions(transaction:transaction){
    this.transaction.next(transaction);
  }
}
