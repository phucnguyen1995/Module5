import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name='Phuc';
  public age=10.23456;
  public vehicles =['Toyota','Honda','Mitsubishi']

  constructor() { }

  public tangTuoi() {
    this.age++;
    // neu tuoi =20 thi thay doi ten la hahaha

    // if(this.age ===20) {
    //   this.name='hahaha';
    // }

     this.vehicles.push(this.name+':'+this.age)
  }

  ngOnInit(): void {
  }

}
