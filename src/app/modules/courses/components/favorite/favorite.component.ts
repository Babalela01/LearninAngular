import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['isSelected'] -- Alternate input properties
})
export class FavoriteComponent  {
  selectedStar = '/assets/star-full.png';
  emptyStar = '/assets/star-empty.png';

  @Input('is-favorite') isSelected; //Optional alias - Allows for refactorings with less breaking
  @Output() change = new EventEmitter();
  //Outputs can also be aliased: @Output('change')


  getImageUrl() {
    return this.isSelected ? this.selectedStar : this.emptyStar
  }

  toggle() {
    this.isSelected = !this.isSelected;
    this.change.emit({isFavorite: this.isSelected})
  }
}

export interface FavoriteChangedEvent {
  isFavorite: Boolean
}
