import { InjectionToken, NgModule } from '@angular/core';

export class AppConfig {
	baseUrl: string;
}

export const APP_CONSTANTS: AppConfig = {
	baseUrl: 'http://localhost:4200/api/'
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@NgModule({
	providers: [{
		provide: APP_CONFIG,
		useValue: APP_CONSTANTS
	}]
})
export class AppConfigModule { }
