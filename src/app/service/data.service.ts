import { Injectable } from '@angular/core';
import { Datas } from '../data/data';
import { ApiResponse, Data } from '../models/data.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  datas = Datas; 

  public getDataFromModel() {
    return new Promise((resolve, reject) => {
        try {
            resolve(this.datas)
        } catch (e) {
            reject(e)
        }
    })
  }
}
