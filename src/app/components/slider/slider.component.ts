import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  isSliderOpen: boolean = false;

  // Toggle slider visibility
  toggleSlider(): void {
    this.isSliderOpen = !this.isSliderOpen;
  }

  
}
