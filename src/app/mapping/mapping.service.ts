import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MappingService {

  constructor(private http: HttpClient) { }

  getTargetTable(): Observable<any>{
    const url="http://10.20.249.134:2708/xorpay/v1/getAllTargetTables"
    //"https://jsonplaceholder.typicode.com/todos/1"
    //"http://10.20.249.134:2708/xorpay/v1/getAllTargetTables"
    //"http://localhost:2708/xorpay/v1/getAllTargetTables"
    return this.http.get(url)
    .pipe(
      map((data) => data)
    )
  }

  getSourceTable(): Observable<any>{
    const url ="http://10.20.249.134:2708/xorpay/v1/getAllSourceTables"
    //"http://localhost:2708/xorpay/v1/getAllSourceTables   "
    return this.http.get(url)
  }
}
