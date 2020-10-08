import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptEasylinkComponent } from './nativescript-easylink.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptEasylinkComponent }])],
	declarations: [NativescriptEasylinkComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptEasylinkModule {}
