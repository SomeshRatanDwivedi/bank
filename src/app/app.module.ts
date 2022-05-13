import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkingComponent } from './working/working.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    WorkingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"working",
        component: WorkingComponent
      },
      {
        path:'',
        redirectTo:'/working',
        pathMatch:'full'
      }
 
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
