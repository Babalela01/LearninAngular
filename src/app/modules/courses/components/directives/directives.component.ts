import { Component } from '@angular/core';

interface Course {
  id: number,
  name: string
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  courses: Array<Course> = null;
  hidden = false;
  viewMode = 'map';
  canSave = false;

  loadCourses() {
    this.courses = [{id:1, name:'Course 1'},{id:2, name:'Course 2'}, {id:3, name:'Course 3'}];
  }

  addCourse() {
    let id = this.courses.length + 1;
    this.courses.push( {id : id, name : 'Course ' + id})
  }

  removeCourse() {
    this.courses.pop()
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
