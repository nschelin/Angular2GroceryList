import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// will error due to weird file strucutre
// need to fix
import { AppNavigationComponent } from '../navigation/app.navigation'; 
import { GroceryListComponent } from '../gl-list/app.glist.list';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, AppNavigationComponent, GroceryListComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }