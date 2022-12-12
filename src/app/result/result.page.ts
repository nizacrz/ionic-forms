import { Component, OnInit } from '@angular/core';
import { NavController} from "@ionic/angular";
import { ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})

export class ResultPage implements OnInit {
  myForm : any;
  fName : any;
  lName : any;
  birthdate : any;
  email : any;
  pNumber : any;

  constructor(public navCtrl: NavController, private route: ActivatedRoute, private router: Router, private location: Location) { }
 
  
  ngOnInit() {
    this.myForm = this.route.snapshot.paramMap.get('myForm');
    this.fName = this.route.snapshot.paramMap.get('fName');
    this.lName = this.route.snapshot.paramMap.get('lName');
    this.birthdate = this.route.snapshot.paramMap.get('birthdate');
    this.email = this.route.snapshot.paramMap.get('email');
    this.pNumber = this.route.snapshot.paramMap.get('pNumber');
  }

  goBack() {
    this.navCtrl.pop();
    this.router.navigate(['home']);
  }

}
