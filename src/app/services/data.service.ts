import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mappedData: any = [];

  constructor() { }

  setMappedData(val) { 
    this.mappedData = [];
    this.mappedData = val;
   }
  getMappedData() { 
    return this.mappedData;
   }
   clearMappedData() {
     this.mappedData = [];
   }
}
