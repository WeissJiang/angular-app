import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import EventService from '../shared/services/EventService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    WishListItemComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Build Resume using Angular - download resume pdf / import csv'),
    new WishItem('To learn ASP.NET MVC'),
    new WishItem('To learn ASP.NET Testing'),
    new WishItem('To learn Bootstrap'),
    new WishItem('Get A cup of Coffee', true)
  ];

  listFilter: string = "1";
  filter: (item: WishItem) => boolean = (item: WishItem) => !!item;

  handleFilterChange(newFilter: (item: WishItem) => boolean) {
    this.filter = newFilter;
  }
  
  constructor() {
    EventService.listen("removeWish", (index: number) => {
      console.log('removed: ', this.items[index]);
      this.items.splice(index, 1);
    })
  }
}
