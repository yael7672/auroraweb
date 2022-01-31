import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MeetingsCoordinatationComponent } from './meetings-coordinatation/meetings-coordinatation.component';
import { ServiceCallsComponent } from './service-calls/service-calls.component';
import { InformationComponent } from './information/information.component';
import { OrdersAndPaymentsComponent } from './orders-and-payments/orders-and-payments.component';
import { ContractComponent } from './contract/contract.component';
import { UpdateCompanyDetailsComponent } from './update-company-details/update-company-details.component';
import { UpdatePersonalDetailsComponent } from './update-personal-details/update-personal-details.component';
import { MyServiceCallsComponent } from './my-service-calls/my-service-calls.component';
import { SpecificOrderComponent } from './specific-order/specific-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { MyContractsComponent } from './my-contracts/my-contracts.component';
import { SpecificContractComponent } from './specific-contract/specific-contract.component';
import { KnowledgeArticlesComponent } from './knowledge-articles/knowledge-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MeetingsCoordinatationComponent,
    ServiceCallsComponent,
    InformationComponent,
    OrdersAndPaymentsComponent,
    ContractComponent,
    UpdateCompanyDetailsComponent,
    UpdatePersonalDetailsComponent,
    MyServiceCallsComponent,
    SpecificOrderComponent,
    NewOrderComponent,
    MyContractsComponent,
    SpecificContractComponent,
    KnowledgeArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
