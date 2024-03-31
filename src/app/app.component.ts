import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get A cup of Coffee', true)
  ];

  listFilter: string = "1";
  filter: (item: WishItem) => boolean = (item: WishItem) => !!item;

  handleFilterChange(newFilter: (item: WishItem) => boolean) {
    this.filter = newFilter;
  }
  
  // get visibleItems(): WishItem[] {
  //   return this.items.filter(this.filter)
  // };
}
