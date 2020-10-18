import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptOutlineLabelComponent } from './nativescript-outline-label.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptOutlineLabelComponent }])],
	declarations: [NativescriptOutlineLabelComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOutlineLabelModule {}
