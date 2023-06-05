import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceRecordService {

  constructor(private http: HttpClient) {

    year: ''
    ammount: ''
    monthIncomes :''
    monthOutcomes:''
   }
}
