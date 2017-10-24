import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    url = "https://blockchain.info/ticker";
    constructor(private http:Http) { }
    getWithObservable(): Observable<any[]> {
        return this.http.get(this.url)
	        .map(this.extractData)
	        .catch(this.handleErrorObservable);
    }
    private extractData(res: Response) {
      	let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
      	console.error(error.message || error);
      	return Observable.throw(error.message || error);
    }
}
