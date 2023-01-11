import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import {UserAuthModule} from './user-auth/user-auth.module'
import { CountComponent } from './count/count.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        UserListComponent,
        StudentListComponent,
        CountComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        UserAuthModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSlideToggleModule,
        NgbModule
    ]
})
export class AppModule { }
