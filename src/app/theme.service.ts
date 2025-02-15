import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  setTheme(isDarkMode: boolean): void {
    const theme = isDarkMode ? 'dark-theme' : 'light-theme';
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); // Store theme preference in local storage
  }

  // Get the current theme (dark or light)
  getCurrentTheme(): string {
    return localStorage.getItem('theme') || 'light-theme';
  }
}
