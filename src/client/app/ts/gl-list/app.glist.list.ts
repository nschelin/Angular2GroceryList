import { Component, OnInit } from '@angular/core';
import { GroceryListService } from '../gl-list/app.glist.service';
import { GroceryList } from '../classes/GroceryList';

@Component({
	selector: 'grocerylist-list',
	templateUrl: './app/js/gl-list/app.glist.list.html'
})

export class GroceryListComponent implements OnInit {
	groceryListData: any;
	groceryLists: GroceryList[];	
	constructor(private glistService: GroceryListService) {
		this.groceryListData = { groceryLists: new Array<any>() };
	}

	getGroceryLists(): void {
		this.glistService.getGroceryListsLists().then(gListData => {
			this.groceryListData = gListData;
			this.groceryLists = gListData.groceryLists as GroceryList[];
		});
	}

	ngOnInit(): void {
		this.getGroceryLists();
	}
}