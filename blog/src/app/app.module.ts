import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountrytListComponent } from './countryt-list/countryt-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CountrytListComponent,
    HeaderComponent,

  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    NgbModule,
    BrowserAnimationsModule


  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
