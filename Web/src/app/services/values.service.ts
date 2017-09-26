import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { APP_CONFIG, AppConfig } from '../app.constants';
import { Adal4Service } from 'adal-angular4';
import { SecureHttpService } from './secure-http.service';

@Injectable()
export class ValuesService extends SecureHttpService<string> {

	constructor(http: Http, @Inject(APP_CONFIG) appConfig: AppConfig, adalService: Adal4Service) {
		super(http, appConfig.baseUrl + 'values', adalService);
	}

}
