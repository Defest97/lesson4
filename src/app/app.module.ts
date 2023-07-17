import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloService } from './hello.service';
import { UsersService } from './users.service';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HelloService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
