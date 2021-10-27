import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Movie} from "../model/Movie";
import {SlideService} from "../service/slide.service";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  movies: Movie[] = [];

  createForm = new FormGroup({

    code: new FormControl('', [Validators.required, Validators.pattern('^(CI)-[0-9]{4}$')]),

    movie: new FormControl('', Validators.required),

    dayStart: new FormControl('', [Validators.required,this.validateDayStart]),

    quantity: new FormControl('', [Validators.required,Validators.min(1),Validators.pattern('^[1-9]\\d*$')]),

  })

  // dayStart: new FormControl('', [Validators.required,Validators.pattern(')]),

  constructor(private slideService: SlideService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getMovie();
  }


  getMovie() {
    this.slideService.getAllMovie().subscribe(data => {
      this.movies = data;
    })
  }

  createMovie() {
    const slide = this.createForm.value;
    this.slideService.saveSlide(slide).subscribe(() => {
      this.router.navigateByUrl('/movie-list');
      this.showMessageSuccess();

    }, error => {
      this.showError()
    })
  }

  showMessageSuccess() {
    this.toast.success('Create successfully', 'message')
  }

  showError() {
    this.toast.error('error', 'message')
  }

  // 2012-12-03 => 20121203

  validateDayStart(abstractControl: AbstractControl): any {
    const date = abstractControl.value;
    const now = new Date().toJSON().slice(0,10).split('-').join("");
    // return now <= date.toString().split('-').join("") ? null : {errorTime: true};
    return 20031011 >= date.toString().split('-').join("") ? null : {errorTime: true};
    // return date
  }
 2013

}

// console.log(now);
// console.log(date);
// console.log(date.toString().split('-').reverse().join(""));
