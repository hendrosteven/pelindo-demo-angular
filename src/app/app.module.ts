import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgProgressModule} from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorInputComponent } from './author-input/author-input.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookInputComponent } from './book-input/book-input.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './services/book-service';
import { AuthorService } from './services/author-service';
import { UserService } from './services/user-service';
import { AuthGuard } from './auth-guard';

export const AppRoutes : any = [
  { path: "", component: AppComponent},
  { path: "home", component: HomeComponent},
  { path: "list-author", component:  AuthorListComponent},
  { path: "input-author", component: AuthorInputComponent, canActivate: [AuthGuard]},
  { path: "list-book", component: BookListComponent },
  { path: "input-book", component: BookInputComponent, canActivate: [AuthGuard]},
  { path: "register", component: RegisterComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorInputComponent,
    BookListComponent,
    BookInputComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,     
    FormsModule, 
    BrowserModule,
    NgProgressModule,
    RouterModule.forRoot(AppRoutes,{useHash: true})
  ],
  providers: [AuthorService, BookService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
 