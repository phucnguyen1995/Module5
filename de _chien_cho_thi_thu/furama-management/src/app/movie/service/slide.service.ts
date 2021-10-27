import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Slide} from "../model/Slide";
import {Movie} from "../model/Movie";

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  public API_SLIDE = 'http://localhost:3000/slide'

  constructor(private http: HttpClient) {
  }

  public getAllSlide(): Observable<Slide[]> {
    return this.http.get<Slide[]>(this.API_SLIDE);
  }

  public getAllMovie(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movie');
  }

  public saveSlide(slide:Slide): Observable<Slide> {
    return this.http.post<Slide>(this.API_SLIDE, slide)
  }

  public findById(id: number): Observable<Slide> {
    return this.http.get<Slide>(this.API_SLIDE + "/" + id)
  }

  public deleteSlide( id: number): Observable<void> {
    return this.http.delete<void>(this.API_SLIDE + "/" + id)
  }



}
