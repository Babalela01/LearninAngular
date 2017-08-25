import {Component} from "@angular/core";
import {CoursesHttpService} from "../../services/courses-http.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(service : CoursesHttpService) {
    this.courses = service.getCourses();
  }

  title = "List of Courses";
  courses;
  imageUrl = "http://hanaleikauaivacation.com/wp-content/uploads/parser/pretty-landscapes-1.jpg"
  colSpan = 2;
  isActive = true;
  textColor = "white";
  email = "me@example.com";


  toggle($event) {
    //$event is the standard  DOM event object
    this.isActive = !this.isActive;
    console.log("Event logged ", $event);
    $event.stopPropagation(); //Std JS - prevent bubbling up of events
  }

  onDivClicked($event) {
    this.textColor = "black";
    console.log("Div click ", $event)
  }

  onKeyUp(text:String) {
    //traditional: If ($event.keycode = ....)
    console.log('Pressed Enter ', text);
  }

}


