import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'nativescript-easylink', loadChildren: () => import('./plugin-demos/nativescript-easylink.module').then(m => m.NativescriptEasylinkModule) },
	{ path: 'nativescript-sha', loadChildren: () => import('./plugin-demos/nativescript-sha.module').then(m => m.NativescriptShaModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
