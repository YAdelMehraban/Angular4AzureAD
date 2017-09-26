import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ValuesComponent } from './components/values/values.component';
import { AppConfigModule } from './app.constants';
import { AuthGuard } from './services/authguard.service';
import { routing } from './app-routing';
import { ValuesService } from './services/values.service';
import { SecureHttpService } from './services/secure-http.service';
 
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		ValuesComponent
	],
	imports: [
		BrowserModule,
		AppConfigModule,
		HttpModule,
		routing
	],
	providers: [
		AuthGuard,
    SecureHttpService,
		ValuesService,
		Adal4Service,
		{
			provide: Adal4HTTPService,
			useFactory: Adal4HTTPService.factory,
			deps: [Http, Adal4Service]
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
