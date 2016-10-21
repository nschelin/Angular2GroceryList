import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppNavigationComponent } from './app.navigation';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, AppNavigationComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }