import { Component, OnInit } from '@angular/core';
import { SliderService } from '../slider.service';
import { CommonModule } from '@angular/common';

export interface SliderItem {
  imageUrl: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderItems: SliderItem[] = [];
  currentIndex = 0;

  constructor(private sliderService: SliderService) {}

  ngOnInit(): void {
    this.sliderService.getSliderItems().subscribe((data: SliderItem[]) => {
      this.sliderItems = data;
      setInterval(() => this.nextSlide(), 3000);
    });
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.sliderItems.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.sliderItems.length) % this.sliderItems.length;
  }

  isFocused(index: number): boolean {
    return index === this.currentIndex;
  }

  getTransformStyle(): string {
    const offset = this.currentIndex - 1;
    const shift = -(offset * 25);
    return `translateX(${shift}%)`;
  }
}
