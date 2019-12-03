import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message: string="hello";  //its a memory variable(message)
  message1:string=new Date().toDateString();
  dateMessage:string
  datemessage1:string
     marks:number=-2
     flag:string="Shobhit "
     flag1:string="Jawa"
     flag2:string
     ids: Array<number>;
     x:number=5;
     y:number=10;
     h:number
  constructor() {
    this.flag2=this.flag+this.flag1;

     for(var i=0;i<10;i++)
     {
       this.y=this.y+1;
       break;
     }
     this.flag=this.flag.toUpperCase();

     this.ids=[23, 34, 100, 124, 44]; 
      console.log(this.ids[0]);
        this.h=this.ids[1];

    setInterval(() =>{
      let currentdate= new Date();
      this.datemessage1=currentdate.toLocaleTimeString();
    },1000);
     let current=new Date();
    this.dateMessage=current.toDateString()+' '+current.toLocaleTimeString(); 
    
    setInterval(()=>{
             if(this.marks>=0)
             {
                  this.marks+=1;
             }
             else
             {
               //alert("stopped");
               this.marks=0;
             }
    },1000)
  }
  ngOnInit() {
  }
  
addtwonum(a:number,b:number)
{
  return a+b;
}

}
