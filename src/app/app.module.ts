import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';

import {PostsService} from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
