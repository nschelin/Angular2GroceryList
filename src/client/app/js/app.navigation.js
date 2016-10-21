"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppNavigationComponent = (function () {
    function AppNavigationComponent() {
    }
    AppNavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-navigation',
            template: " <div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<nav>\n\t\t\t\t\t\t\t<ul class=\"navigation\">\n\t\t\t\t\t\t\t\t<li>Home</li>\n\t\t\t\t\t\t\t\t<li>Products</li>\n\t\t\t\t\t\t\t\t<li>Categories</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t</div>\n\t\t\t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppNavigationComponent);
    return AppNavigationComponent;
}());
exports.AppNavigationComponent = AppNavigationComponent;
