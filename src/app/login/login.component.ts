import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: UntypedFormGroup;
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
  
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder) {
    // const current = this.localizationService.currentLang;
    // console.log(current);
    // if(current === 'ar'){
    //   this.isRtl=true;
    // }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}

