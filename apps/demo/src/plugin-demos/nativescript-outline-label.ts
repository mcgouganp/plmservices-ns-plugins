import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptOutlineLabel } from '@demo/shared';
import {} from '@plmservices/nativescript-outline-label';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptOutlineLabel {}
