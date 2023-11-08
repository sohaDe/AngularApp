import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.css']
})
export class AccountVerificationComponent {
  isRtl=false;

  selectedLanguage='en';
  getFlagIconClass(): string {
    if (this.selectedLanguage === 'en') {
      return 'fi-us';
    } else if (this.selectedLanguage === 'ar') {
      return 'fi-sa';
    }
    return '';
  }
  
  switchToRtl(language: string): void {
   this.isRtl=!this.isRtl
    this.selectedLanguage = language;
    const flagIconClass = this.getFlagIconClass();
  }
  constructor(private router:Router) {
    // const current = localizationService.currentLang;
    // if(current==="ar"){
    //   this.isRtl=true;
    // }
  }
  goToForm(){
    this.router.navigate(['/reset-password-form']);
  }


}
