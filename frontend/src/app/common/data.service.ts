import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addUser(item){
    // return this.http.post("http://localhost:3000/saveCar",item)
    return this.http.post("https://projectproject.herokuapp.com/saveCar",item)
  }

  getUserDetail()
  {
    // return this.http.get("http://localhost:3000/getCarList")
    return this.http.get("https://projectproject.herokuapp.com/getCarLast")
  }
}
