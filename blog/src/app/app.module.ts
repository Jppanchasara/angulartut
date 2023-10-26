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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from'@angular/material/button';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CountrytListComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    ChildTwoComponent,
    UsdInrPipe,
    RedElDirective,

  
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule


  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
