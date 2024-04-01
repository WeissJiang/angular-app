import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import EventService from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText: string = '';
  @Input() fulfilled: boolean = false;

  @Input() index: number = 0;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() { 
    return this.fulfilled ? 'strikeout text-muted' : '';

    /**
     * Alternatively, you can use the following code to achieve the same result:
     */

    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];

    // return {
    //   'strikeout': this.fulfilled,
    //   'text-muted': this.fulfilled
    // }
  } 

  removeWish = () => {
    console.log('removeWish', this.index);
    EventService.emit("removeWish", this.index);
  }

  toggleFulfilled = () => {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  };
}
