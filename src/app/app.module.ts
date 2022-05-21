import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkingComponent } from './working/working.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { SettlementComponent } from './settlement/settlement.component';
import { SettlepagePipe } from './settlepage.pipe';
@NgModule({
  declarations: [
    AppComponent,
    WorkingComponent,
    FilterPipe,
    SettlementComponent,
    SettlepagePipe,
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
      },
      {
        path:"settle",
        component: SettlementComponent
      },
 
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
