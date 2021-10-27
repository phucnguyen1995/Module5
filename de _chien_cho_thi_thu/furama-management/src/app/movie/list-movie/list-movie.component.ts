import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Movie} from "../model/Movie";
import {Slide} from "../model/Slide";
import {SlideService} from "../service/slide.service";
import {DeleteMovieComponent} from "../delete-movie/delete-movie.component";

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  page: number;


  movies:Movie[]=[];
  slides:Slide[]=[];


  constructor(private slideService : SlideService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showList();
    this.getAllMovie();
  }

  showList() {
    this.slideService.getAllSlide().subscribe(data=>{
      this.slides = data;
    })
  }

  getAllMovie() {
    this.slideService.getAllMovie().subscribe(data => {
      this.movies = data;
    })
  }

  openDialog(id: any) {
    this.slideService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteMovieComponent, {
        width: '500px',
        data: {slide: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }


}
