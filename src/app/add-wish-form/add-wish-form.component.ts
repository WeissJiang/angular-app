import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit {
  @Output() addWish = new EventEmitter<WishItem>();

  ngOnInit(): void {}

  newWishText: string = "";
  addNewWish = () => { 
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = "";
  }
}
