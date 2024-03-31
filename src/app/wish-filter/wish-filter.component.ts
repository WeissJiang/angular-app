import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

const filters: ((item: WishItem) => boolean)[] = [
  (item: WishItem) => !!item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  @Input() listFilter: string = "0";
  @Output() selectedFilter = new EventEmitter<(item: WishItem) => boolean>();

  ngOnInit(): void {
      this.changeFilter(this.listFilter);
  }

  changeFilter(value: string) {
    const index = parseInt(value) || 0;
    const filterFunction = filters[index];
    this.selectedFilter.emit(filterFunction);
  }
}
