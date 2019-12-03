import { Component } from '@angular/core';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  title = 'first1';

   fl= 10;
   constructor()
   {
     this.user=new User();
     this.user.name='arpit';
     this.user.designation='risk analyst',
     this.user.address='1000 street city State',
     this.user.phone=[
      '54653446534',
      '34253465345'
     ];
   }
}
