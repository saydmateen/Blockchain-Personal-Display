import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    observableResults: Observable<any[]>;
    exchangeResults: any[];
    errorMessage: string;
    constructor(private service: AppService){ }

    ngOnInit(): void {
      this.exchangeResults = [];
      this.observableResults = this.service.getWithObservable();
      this.observableResults.subscribe(data => {
        for(let key in data){
            this.exchangeResults.push({"currency": key, "fm": data[key]["15m"], "last": data[key]["last"], "sell": data[key]["sell"], "symbol": data[key]["symbol"], "buy": data[key]["buy"]});
        }
      },
      error =>  this.errorMessage = <any>error);
    }
}
