import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-cart',
  templateUrl: './address-cart.component.html',
  styleUrls: ['./address-cart.component.css']
})
export class AddressCartComponent implements OnInit {
   addr:any;
   user:any;
   user1:any;
   @Input('name') userName:string;
   mat:Array<string>;
  constructor() { 
    this.user={
      name:'shobhit',
      title:'software developer',
      address:'6150 house number street no 15 hyderabad,Telangana',
      phone:[
        '56346783290',
        '43526378343'
      ]
    };
    this.mat=[
       'cap',
       'tshirt',
       'shirt',
       'jeans',
       'towel',
       'suit',
       'handbag'
     ]  
    this.userName=this.userName;  
   
  }
   
  ngOnInit() {
    this.user1={
      name:this.userName,
      title:'BPO',
      address:'650 house number street no 16 banglore',
      phone:[
        '56341434145',
        '34444323343'
      ]
    };
  }

}
