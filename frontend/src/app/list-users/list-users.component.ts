import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
summary:any
  constructor(private dataService : DataService ) { }

  ngOnInit() {
    this.dataService.getUserDetail().subscribe(
      (data:any)=>{
        console.log(data)
        this.summary=data.data
      },
      err=>{
        console.log(err)
      }
    )
  }

}
