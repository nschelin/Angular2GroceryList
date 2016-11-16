import { Injectable } from '@angular/core';
import { GroceryList } from '../classes/GroceryList';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class GroceryListService {

	private headers: Headers;

	constructor(private http: Http) {
		this.headers = new Headers();
		this.headers.set('Content-Type', 'application/json');
		this.headers.set('Accept', 'application/json');
	}

	getGroceryListsLists(): Promise<any> {
		let apiUrl = '/api/grocerylist';

		return this.http.get(apiUrl)
					.toPromise()
					.then(response => {
						//response.json().data as GroceryList[]
						return response.json();
					})
					.catch(this.handleError);

		// let glist = [{ id: 789, 
		// 			 total: 36.85, 
		// 			 subtotal: 33.5, 
		// 			 products: [{
		// 					id: 4567,
		// 					name: 'Milk',
		// 					price: 2.00, 
		// 					categoryid: 1234,
		// 					count: 1
		// 				},
		// 				{
		// 					id: 4568,
		// 					name: 'Steak',
		// 					price: 10.00,
		// 					categoryid: 1235,
		// 					count: 2
		// 			}]
		// 			},
		// 			{ id: 790, 
		// 			 total: 24.20, 
		// 			 subtotal: 22.00, 
		// 			 products: [{
		// 				id: 4567,
		// 				name: 'Milk',
		// 				price: 2.00, 
		// 				categoryid: 1234,
		// 				count: 1
		// 			},
		// 			{
		// 				id: 4568,
		// 				name: 'Steak',
		// 				price: 10.00,
		// 				categoryid: 1235,
		// 				count: 3
		// 			},
		// 			{
		// 				id: 4569,
		// 				name: 'Corn',
		// 				price: 0.50,
		// 				categoryid: 1236,
		// 				count: 3
		// 			}]}
		// 		]
		// return Promise.resolve(glist);
	}

	handleError(error: any): Promoise<any> {
		console.log('Error: ' + error);
	    return Promise.reject(error.message || error);
	}
}