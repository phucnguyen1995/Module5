import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {SlideService} from "../service/slide.service";

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  public id: number;
  public code: string;


  constructor( public dialogRef: MatDialogRef<DeleteMovieComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public slideService: SlideService,
               private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.id = this.data.slide.id;
    this.code = this.data.slide.code;
  }

  close(): void {
    this.dialogRef.close();
  }

  delete() {
    this.slideService.deleteSlide(this.id).subscribe(() => {
      this.dialogRef.close();
      this.toast.success('Delete successfully', 'message')
    });
  }
}
