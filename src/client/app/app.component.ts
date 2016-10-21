import { Component } from '@angular/core';
import { AppNavigationComponent } from './app.navigation';

@Component({
	selector: 'my-app',
	template: `	<div class="container">
					<div class="row">
						<div class="col-md-12">
							<h1>Grocery List App</h1>
						</div>
					</div>
					<app-navigation></app-navigation>
				</div>`
})

export class AppComponent { 

}