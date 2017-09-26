import { Component, OnInit } from '@angular/core';
import { Adal4Service } from 'adal-angular4';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isLoggedIn: boolean = false;

	constructor(private adalSvc: Adal4Service, private router: Router) {
		this.adalSvc.init(environment.azureConfig);
	}

	ngOnInit(): void {
		this.adalSvc.handleWindowCallback();
		this.isLoggedIn = this.adalSvc.userInfo.authenticated;
	}

	logout(): void {
		this.adalSvc.logOut();
	}
}
