import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkingComponent } from './working/working.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { SettlementComponent } from './settlement/settlement.component';
import { SettlepagePipe } from './settlepage.pipe';
import { BaseComponent } from './base/base.component';
import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';
import { HeaderComponent } from './header/header.component';
import { SettlementcontentComponent } from './settlementcontent/settlementcontent.component';
@NgModule({
  declarations: [
    AppComponent,
    WorkingComponent,
    FilterPipe,
    SettlementComponent,
    SettlepagePipe,
    BaseComponent,
    LeftnavbarComponent,
    HeaderComponent,
    SettlementcontentComponent,
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
        path:"base",
        component: BaseComponent
      },
      {
        path:'',
        redirectTo:'/base',
        pathMatch:'full'
      },
     
      {
        path:"header",
        component: HeaderComponent
      },
      {
        path:"leftnavbar",
        component: LeftnavbarComponent
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
