import { Injectable } from '@angular/core'
import { Employee } from '../models/employee'
import { Observable } from 'rxjs/Rx'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/do'
// import 'rxjs/add/operator/catch'

@Injectable()
export class FormPosterService{
    constructor(private _http: Http){}

    httpUrl: string = 'http://localhost:3100/'

    handleError(error: any){
        console.log('Handle Error Post error: ', error);
        return Observable.throw(error.statusText);
    }

    postEmployeeForm(employee: Employee){
        console.log("posting employee: " + employee);
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this._http.post(this.httpUrl, body, options).
                        map(this.extractData).
                        catch(this.handleError);
    }

    getLanguages(): Observable<any>{
        console.log("Getting languages");
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this._http.get(this.httpUrl)
                        .map(this.extractLanguages)
                        .catch(this.handleError)
    }

    extractLanguages(res: Response){
        let body = res.json()
        return body.data || {}
    }

    extractData(res: Response){
        let body = res.json();
        return body.fields || {}
    }
}
