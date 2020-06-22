import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/models/constants';

@Injectable()
export class DataService {

    constructor(private _http: HttpClient) { }

    getFlights(): Observable<any> {
        return this._http.get(Constants.FLIGHT_JSON_URL);
    }

}