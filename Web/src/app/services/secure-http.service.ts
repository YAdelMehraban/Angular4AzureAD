import { Http, Response, Headers } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Adal4Service } from 'adal-angular4';
import { APP_CONFIG, AppConfig } from '../app.constants';

@Injectable()
export class SecureHttpService<T> {
	headers: Headers;

	constructor(private http: Http, private apiEndPointUrl: string, private adalService: Adal4Service) {

		this.headers = new Headers({ 'Content-Type': 'application/json' });
		let jwt = this.adalService.userInfo.token;
		this.headers.append('Authorization', 'Bearer ' + jwt);
	}

	getAll(): Observable<any> {
		return this.http.get(this.apiEndPointUrl, { headers: this.headers }).map(
			(res: Response) => {
				return res.json() as any[];
			}).catch(this.handleError);
	}

	get(id: number): Observable<any> {
		return this.http.get(this.apiEndPointUrl + '/' + id).map((value, i) => {
			return <T>value.json()
		})
			.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('server error:', error);
		if (error instanceof Response) {
			let errMessage = '';
			try {
				errMessage = error.json().error;
			} catch (err) {
				errMessage = error.statusText;
			}
			return Observable.throw(errMessage);
		}
		return Observable.throw(error || 'server error');
	}
}
