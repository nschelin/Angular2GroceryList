import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// will error due to weird file strucutre
// need to fix
import { AppNavigationComponent } from '../navigation/app.navigation'; 
import { GroceryListComponent } from '../gl-list/app.glist.list';
import { GroceryListService } from '../gl-list/app.glist.service';

@NgModule({
	imports: [ BrowserModule, HttpModule ],
	declarations: [ AppComponent, AppNavigationComponent, GroceryListComponent ],
	bootstrap: [ AppComponent ],
	providers: [ GroceryListService ]
})

export class AppModule { }