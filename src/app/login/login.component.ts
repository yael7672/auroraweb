import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // login111(){
  //   this.user.UserName=this.name;
  //   this.user.Password=this.password;
  //   // localStorage.setItem("user",JSON.stringify(this.user));
  //   // localStorage.setItem("userId",JSON.stringify(this.userId));  
  //   this.userService.logIn(this.user).subscribe( 
        
  //       (data) =>
  //       {
  //         console.log(data);
  //         localStorage.setItem("user",JSON.stringify(this.user));
  //         //  this.userId.ContactGuid=x;
  //          localStorage.setItem("userId",JSON.stringify(data));
  //          swal(" ברוך הבא "+ this.user.UserName);
  //           this.router.navigate(["myServiceCall"]);
  //       }  ,
  //      (error) => 
  //      {
  //       swal("משתמש לא קיים במערכת");
  //   }
  //     );}
}
