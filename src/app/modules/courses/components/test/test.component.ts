import { Component } from '@angular/core';
import {FavoriteChangedEvent} from "../favorite/favorite.component";

@Component({
  selector: 'courses-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  post = {
    title: "Title",
    isFavorite: false
  };

  onFavouriteChanged(event: FavoriteChangedEvent) {
    console.log("Favorite changed", event.isFavorite)
  }
}


