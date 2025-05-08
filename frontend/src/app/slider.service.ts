import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SliderItem } from './slider/slider.component';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private apiUrl = 'http://localhost:3000/api/slider';
  
  constructor(private http : HttpClient) { }

  getSliderItems(): Observable<SliderItem[]> {
    return this.http.get<SliderItem[]>(this.apiUrl);
  }
}
