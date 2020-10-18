import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'nativescript-easylink',
		},
		{
			name: 'nativescript-outline-label',
		},
		{
			name: 'nativescript-sha',
		},
	];
}
