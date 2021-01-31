import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerform:FormGroup;
  buttonName:any = "OTP";
  constructor(private router:Router,private fb:FormBuilder) {
    this.registerform = fb.group({
      recommendetionCode:['',Validators.required],
      mobile:['',Validators.required],
      varificationCode:['',Validators.required],
      loginPassword:['',Validators.required],
      securityPassword:['',Validators.required]
    })
  }
  ngOnInit(): void {
  
  }
  
  back(){
    this.router.navigate(['/home']);
  }
  otp(){
    this.buttonName = 60;
    var i=this.buttonName 
   setInterval(() => {
  if (i == 0) {
    return;
  }
  this.buttonName=i--
  console.log(i--);

}, 1000);

  }
}
