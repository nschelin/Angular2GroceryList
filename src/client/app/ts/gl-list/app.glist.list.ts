import { Component, OnInit } from '@angular/core';
import { GroceryListService } from '../gl-list/app.glist.service';

@Component({
	selector: 'grocerylist-list',
	templateUrl: './app/js/gl-list/app.glist.list.html'
})

export class GroceryListComponent implements OnInit {
	groceryLists: any[];	
	constructor(private glistService: GroceryListService) { }

	getGroceryLists(): void {
		this.glistService.getGroceryListsLists().then(glists => this.groceryLists = glists);
	}

	ngOnInit(): void {

	}
}