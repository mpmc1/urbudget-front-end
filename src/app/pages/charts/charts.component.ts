import { Component, OnInit } from '@angular/core';
import { ServiceRecordService } from 'src/app/shared/services/budget-service/service-record.service';
import { TokenService } from 'src/app/shared/services/token-service/token.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { TransactionService } from 'src/app/shared/services/transaction-service/transaction.service';
import { transaction } from 'src/app/shared/models/dashboard.model';

export type ChartOptions = {
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;  
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit{

  series:ApexAxisChartSeries = [
    {
      name: "Ammounts",
      data: []

    },
    {
      name: "IDEAL",
      data: []     
    }        
  ];  
  private expectedSeries:number[] = [0,0,0,0,0,0,0,0,0,0,0,0];
  private currentSeries:number[] = [0,0,0,0,0,0,0,0,0,0,0,0];

  public chartOptions: ChartOptions;
  constructor(private budgetService:ServiceRecordService, private tokenService:TokenService, private transactionService:TransactionService) {
    
    

    this.chartOptions = {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agost",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        ]
      }
    };
  }
  ngOnInit(): void {
    this.budgetService.getBudget().subscribe(budget=>{
      if(budget.data){
        this.transactionService.getTransactions(budget.data.id).subscribe(transactions=>{
          
          if(transactions?.data?.length > 0)  {
            transactions.data.map(transaction=>{
              let month = new Date(transaction.dateOfTransaction).getMonth();
              this.currentSeries[month] +=  transaction.ammount;
            })
          }
          for (let i = 0; i < 12; i++) {
            this.expectedSeries[i] = (budget.data.ammount/12)*(i+1)          
          }
          
          this.series = [
            {
              name: "Ammounts",
              data: this.currentSeries
        
            },
            {
              name: "IDEAL",
              data: this.expectedSeries     
            }        
          ]; 
        }); 
      }
    })
    
    
  }
 

}
