import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptShaComponent } from './nativescript-sha.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptShaComponent }])],
	declarations: [NativescriptShaComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptShaModule {}
