import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController} from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  myForm: FormGroup;
  defaultDate = "2001-09-20";
  isSubmitted = false;
  alertController: any;
  constructor(public formBuilder: FormBuilder, private router: Router, public navCtrl: NavController ) { }
  ngOnInit() {
    this.myForm= this.formBuilder.group({
      fName: ['', [Validators.required, Validators.minLength(2)]],
      lName: ['', [Validators.required, Validators.minLength(2)]],
      birthdate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get errorControl() {
    return this.myForm.controls;
  }
  submitFormValues() {
    this.isSubmitted = true;
    if (!this.myForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.router.navigate(['result', this.myForm.value]);
      console.log(this.myForm.value);
    }
  }
  reset(){
    this.myForm.clearValidators();
    this.myForm.reset();
  }
  submitForm(){
    this.navCtrl.navigateForward(['result']);
  }
}
