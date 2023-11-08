import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StoreComponent } from './store/store.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountVerificationComponent } from './reset-password/account-verification/account-verification.component';
import { ResetPasswordFormComponent } from './reset-password/reset-password-form/reset-password-form.component';
import { OrderComponent } from './order/order.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = 
// [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }];
[{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'store', component: StoreComponent },
{ path: 'reset-password', component:ResetPasswordComponent },
{path:'account-verification',component:AccountVerificationComponent},
{ path: 'reset-password-form', component:ResetPasswordFormComponent },
{ path: 'order', component:OrderComponent },
{ path: 'pricing', component:PricingComponent },



]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
