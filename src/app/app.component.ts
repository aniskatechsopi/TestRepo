import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartestproject';
  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }
}
