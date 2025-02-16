import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { ThemeService } from './theme.service';
import { CommonModule } from '@angular/common';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SliderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[FontAwesomeModule]
})
export class AppComponent {
  title = 'spritiaul';
  isDarkMode: boolean = false;
  faSun = faSun;
  faMoon = faMoon;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    const currentTheme = this.themeService.getCurrentTheme();
    this.isDarkMode = currentTheme === 'dark-theme';
    this.themeService.setTheme(this.isDarkMode); // Set theme on load
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setTheme(this.isDarkMode);
  }
}
