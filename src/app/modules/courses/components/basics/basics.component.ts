import {Component} from "@angular/core";
import {CoursesHttpService} from "../../services/courses-http.service";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  title = "List of Courses";
  courses;
  imageUrl = "http://hanaleikauaivacation.com/wp-content/uploads/parser/pretty-landscapes-1.jpg"
  colSpan = 2;
  isActive = true;
  textColor = "white";
  email = "me@example.com";

  constructor(service: CoursesHttpService) {
    this.courses = service.getCourses();
  }

  toggle($event) {
    //$event is the standard  DOM event object
    this.isActive = !this.isActive;
    console.log("Event logged ", $event);
    //$event.stopPropagation(); //Std JS - prevent bubbling up of events
  }

  onDivClicked($event) {
    this.textColor = "black";
    console.log("Div click ", $event)
  }

  onKeyUp(text: string) {
    //traditional: If ($event.keycode = ....)
    console.log('Pressed Enter ', text);
  }

}
