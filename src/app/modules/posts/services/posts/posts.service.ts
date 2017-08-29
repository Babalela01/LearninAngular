import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Post} from "../../model/post";
import {DataService} from "../data/data.service";

@Injectable()
export class PostsService extends DataService<Post> {

  private static URL: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(http: Http) {
    super(http, PostsService.URL)
  }
}
