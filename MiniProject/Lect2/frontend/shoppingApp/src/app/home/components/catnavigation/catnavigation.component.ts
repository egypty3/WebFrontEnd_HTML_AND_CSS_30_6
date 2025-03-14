import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.css'],
})
export class CatnavigationComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {

    this.categoryService.getAllCategories().subscribe((categories) => {


      this.categories = categories.filter((category) => category.parentCategoryId === null);

    });
  }

  @Output()
  categoryClicked: EventEmitter<number> = new EventEmitter<number>();



  onCategoryClick(category: Category): void {
    //console.log('Category clicked', category);
    // Emit the category id to the parent component
    this.categoryClicked.emit(category.id);
  }
}
