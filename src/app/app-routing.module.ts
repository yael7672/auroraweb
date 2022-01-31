import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContractComponent } from './contract/contract.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { MeetingsCoordinatationComponent } from './meetings-coordinatation/meetings-coordinatation.component';
import { OrdersAndPaymentsComponent } from './orders-and-payments/orders-and-payments.component';
import { RegisterComponent } from './register/register.component';
import { ServiceCallsComponent } from './service-calls/service-calls.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:AppComponent
  // },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'meetingsCoordinatation',
    component:MeetingsCoordinatationComponent
  },
  {
    path:'serviceCalls',
    component:ServiceCallsComponent
  },
  {
    path:'information',
    component:InformationComponent
  },
  {
    path:'ordersAndPaymentsComponent',
    component:OrdersAndPaymentsComponent
  },
  {
    path:'contract',
    component:ContractComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
