import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//ngx bootstrap
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

//Angular firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';

//forms
import { ReactiveFormsModule } from '@angular/forms'

//Spinner module
import {NgxSpinnerModule} from 'ngx-spinner';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgxSpinnerModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
