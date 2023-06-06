import { Component } from '@angular/core';
import { ServiceRecordService } from 'src/app/shared/services/budget-service/service-record.service';

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

export type ChartOptions = {
  series: ApexAxisChartSeries;
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

export class ChartsComponent{
  

  public chartOptions: ChartOptions;
  
  public valor = this.budget.budget.value.data.mothOutcomes;
  public datos = [this.valor,this.valor,this.valor,this.valor,this.valor,this.valor,this.valor,this.valor,this.valor,this.valor,this.valor,this.valor];
  constructor(private budget:ServiceRecordService) {
    
    

    this.chartOptions = {
      series: [
        {
          name: "Ammounts",
          data: this.datos.map(function(x) {
            x = Math.floor(Math.random() * 10);
            return  x * 10;
          })

        },
        {
          name: "IDEAL",
          data: this.datos.map(function(x) {
            x = Math.floor(Math.random() * 10)*10;
            return x - Math.floor(Math.random() * 10)
          })       
        }        
      ],
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

}
