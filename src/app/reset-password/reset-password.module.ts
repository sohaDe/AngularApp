import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ResetPasswordComponent,
    AccountVerificationComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    SharedModule
  ]
})
export class ResetPasswordModule { }
