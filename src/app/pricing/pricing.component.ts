// import { LocalizationService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit{
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
  
  selectCountry:string;
  showCountryMenu:boolean=false;
  toggleCountry(){
    this.showCountryMenu=!this.showCountryMenu;
  }
  selectedCountry(country:string){
    this.selectCountry=country;
    this.showCountryMenu=false;
  }
  getCountryIcon(country:string):string{
    switch(country){
      case 'United State':return 'us';
      case 'United Arab Emirates':return 'sa';
      case 'France':return 'fr';
      case 'Germany':return 'de';
      case 'Italy':return 'it';
      case 'China':return 'cn';
      default:return '';


    }
  }
  isMenuVisible:boolean=false;
  toggleMenu(){
    this.isMenuVisible=!this.isMenuVisible;
  }
  constructor() {
    // const current = localizationService.currentLang;
    // if(current==="ar"){
    //   this.isRtl=true;
    // }
  }
  ngOnInit(): void {
  }
}
