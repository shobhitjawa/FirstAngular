import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:any;
eno:number=2;
inputText :string="Initial Value";
@Input('user') userObj:User
isCollasped:boolean=true;
  constructor() { }

  toggle(){
    this.isCollasped=!this.isCollasped;
  }
  ngOnInit() {
    this.user={
      name:this.userObj.name,
      title:this.userObj.designation,
      address:this.userObj.address,
      phone:this.userObj.phone
    };
  }

}
