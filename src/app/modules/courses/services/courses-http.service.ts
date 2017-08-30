
// Need @Injectable only if service also has dependencies that need to be injected.
export class CoursesHttpService {

  getCourses() {
    return ["course 1", "course 2", "course 3"];
  }

}
