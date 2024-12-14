import { Component, OnInit, HostListener } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure you import the AOS CSS if not already in your global styles

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  ngOnInit(): void {
    // Initialize AOS
    AOS.init({
      duration: 600, // Adjust duration for your desired effect speed
      easing: 'ease-in-out',
      once: true, // Makes the animation occur only once
    });
  }
}
