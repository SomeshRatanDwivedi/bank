import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkingComponent } from './working/working.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { SettlementComponent } from './settlement/settlement.component';
import { SettlepagePipe } from './settlepage.pipe';

import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';
import { HeaderComponent } from './header/header.component';
import { SettlementcontentComponent } from './settlementcontent/settlementcontent.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { CompaignComponent } from './compaign/compaign.component';
import { ProductComponent } from './product/product.component';
import { QueriesComponent } from './queries/queries.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    WorkingComponent,
    FilterPipe,
    SettlementComponent,
    SettlepagePipe,
    LeftnavbarComponent,
    HeaderComponent,
    SettlementcontentComponent,
    RecoveryComponent,
    CompaignComponent,
    ProductComponent,
    QueriesComponent,
    UserComponent,
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
      {
        path:"settlement",
        component: SettlementcontentComponent
      },
      {
        path:"recovery",
        component:RecoveryComponent
      },
      {
        path:"compaign",
        component: CompaignComponent
      },
      {
        path:"product",
        component: ProductComponent
      },
      {
        path:"queries",
        component: QueriesComponent
      },
      {
        path:"user",
        component: UserComponent
      },
 
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
