import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-send-massage',
  templateUrl: './send-massage.component.html',
  styleUrls: ['./send-massage.component.css'], // Corrected styleUrls property
})
export class SendMassageComponent implements OnInit {
  ngOnInit(): void {
    Aos.init({
      duration: 1000, // Set duration to 1000ms (1 second)
      easing: 'ease-in-out',
      once: true,
    });
  }
  sendEmail(e: Event) {
    e.preventDefault(); // Prevents the default refresh

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        e.target as HTMLFormElement,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Message sent successfully!');
          (document.getElementById('contact-form') as HTMLFormElement).reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  }
}
