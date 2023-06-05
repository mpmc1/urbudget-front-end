import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { budget, budgetForm } from './models/dashboard.model'; 



@Injectable({
  providedIn: 'root'
})
export class ServiceRecordService {

  constructor(private http: HttpClient) {}
  private cadena = 'api/v1/transaction/users/' + localStorage.getItem('user') + '/budgets';

  budget: BehaviorSubject<budget> = new BehaviorSubject<budget>({
    data: {
      id: 'string',
        year: 0,
        ammount: 0,
        monthIncomes: 0,
        mothOutcomes: 0,
        user: {}
    },
    message: []
  }); 

  crearBudget(budgetForm:budgetForm){
    return this.http.post<any>(this.cadena, budgetForm); 
  }

  getBudget(){
    return this.http.get<any>(this.cadena);
  }

  setBudget(budget:budget){
    this.budget.next(budget);
  }
  
}
