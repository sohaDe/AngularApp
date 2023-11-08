// import { Component, OnInit } from '@angular/core';
// import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
// import { NzIconService } from 'ng-zorro-antd/icon';
// import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

// export interface Store {
//   store: string;
//   num1: string;
//   num2: string;
//   num3: string;
//   num4: string;
// }
// export interface Store2 {
//   store: string;
//   num1: string;
// }
// @Component({
//   selector: 'app-store',
//   templateUrl: './store.component.html',
//   styleUrls: ['./store.component.css']
// })

// export class StoreComponent implements OnInit {
//   showform: boolean = false;
//   shownoform: boolean = false;
//   otherques: boolean = false;
//   showplatform: boolean = false;
//   lessform: boolean = false;
//   validateForm!: UntypedFormGroup;
//   index = 0;
//   isRtl=false;

//   selectedLanguage='en';
//   getFlagIconClass(): string {
//     if (this.selectedLanguage === 'en') {
//       return 'fi-us';
//     } else if (this.selectedLanguage === 'ar') {
//       return 'fi-sa';
//     }
//     return '';
//   }
  
//   switchToRtl(language: string): void {
//    this.isRtl=!this.isRtl
//     this.selectedLanguage = language;
//     const flagIconClass = this.getFlagIconClass();
//   }
//     inputValue?: string;
//   filteredOptions: string[] = [];
//   options = ['United State', 'United Arab Emirates'];


//   back(): void {
//     this.index -= 1;
//   }

//   next(): void {
//     this.index += 1;
//   }
//   disable = false;

//   listOfData: Store[] = [
//     {
//       store: 'Point of sale',
//       num1: '0',
//       num2: '3',
//       num3: '5',
//       num4: '5',
//     },
//     {
//       store: 'Store languages',
//       num1: '0',
//       num2: '3',
//       num3: '5',
//       num4: '5',
//     },
//     {
//       store: 'In-Store pickup',
//       num1: '0',
//       num2: '3',
//       num3: '5',
//       num4: '5',
//     },
//     {
//       store: 'Local in store',
//       num1: 'check',
//       num2: 'close',
//       num3: 'check',
//       num4: 'check',
//     },
//     {
//       store: 'Custome domain',
//       num1: 'check',
//       num2: 'close',
//       num3: 'check',
//       num4: 'check',
//     },
//     {
//       store: 'Customizing store design',
//       num1: 'check',
//       num2: 'close',
//       num3: 'check',
//       num4: 'check',
//     },

//   ];

//   listOfDataTow: Store[] = [
//     {
//       store: 'Point of sale',
//       num1: '0',
//       num2: '3',
//       num3: '5',
//       num4: '5',
//     },
//     {
//       store: 'Store languages',
//       num1: '0',
//       num2: '3',
//       num3: '5',
//       num4: '5',
//     },
//     {
//       store: 'In-Store pickup',
//       num1: '0',
//       num2: '3',
//       num3: '5',
//       num4: '5',
//     },
//     {
//       store: 'Local in store',
//       num1: 'check',
//       num2: 'check',
//       num3: 'close',
//       num4: 'check',
//     },
//     {
//       store: 'Custome domain',
//       num1: 'close',
//       num2: 'close',
//       num3: 'check',
//       num4: 'check',
//     },
//     {
//       store: 'Customizing store design',
//       num1: 'check',
//       num2: 'check',
//       num3: 'close',
//       num4: 'check',
//     },

//   ];
//   listOfData2: Store2[] = [
//     {
//       store: 'Point of sale',
//       num1: '0',
//     },
//     {
//       store: 'In-Store pickup',
//       num1: '4'
//     },
//     {
//       store: 'Local in store',
//       num1: 'check'
//     },
//     {
//       store: 'Custome domain',
//       num1: 'close'
//     },
//     {
//       store: 'Customizing store design',
//       num1: 'close'
//     },
//   ];
//   listOfData3: Store2[] = [
//     {
//       store: 'Point of sale',
//       num1: '2',
//     },
//     {
//       store: 'In-Store pickup',
//       num1: '7'
//     },
//     {
//       store: 'Local in store',
//       num1: 'check'
//     },
//     {
//       store: 'Custome domain',
//       num1: 'close'
//     },
//     {
//       store: 'Customizing store design',
//       num1: 'close'
//     },
//   ];
//   listOfData4: Store2[] = [
//     {
//       store: 'Point of sale',
//       num1: '2',
//     },
//     {
//       store: 'In-Store pickup',
//       num1: '3'
//     },
//     {
//       store: 'Local in store',
//       num1: 'check'
//     },
//     {
//       store: 'Custome domain',
//       num1: 'close'
//     },
//     {
//       store: 'Customizing store design',
//       num1: 'close'
//     },
//   ];
//   onIndexChange(index: number): void {
//     this.index = index;
//   }


//   submitForm(): void {
//     if (this.validateForm.valid) {
//       console.log('submit', this.validateForm.value);
//     } else {
//       Object.values(this.validateForm.controls).forEach(control => {
//         if (control.invalid) {
//           control.markAsDirty();
//           control.updateValueAndValidity({ onlySelf: true });
//         }
//       });
//     }
//   }

//   constructor(private fb: UntypedFormBuilder, nzconservice: NzIconService, config: NgbCarouselConfig) {
//     // const current = this.localizationService.currentLang;
//     // if (current === 'ar') {
//     //   this.isRtl = true;
//     // }
//     config.wrap = false;
//     config.keyboard = false;
//     config.pauseOnHover = false;
//     this.filteredOptions = this.options;

//   }
//   onChange(value: string): void {
//     this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
//   }

//   ngOnInit(): void {

//   }
// }
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NgbCarouselConfig , NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

export interface Store {
  store: string;
  num1: string;
  num2: string;
  num3: string;
  num4: string;
}
export interface Store2 {
  store: string;
  num1: string;
}
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  showform: boolean = false;
  shownoform: boolean = false;
  otherques: boolean = false;
  showplatform: boolean = false;
  lessform: boolean = false;
  validateForm!: UntypedFormGroup;
  index = 0;
  isRtl = false;
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
  inputValue?: string;
  filteredOptions: string[] = [];
  options = ['United State', 'United Arab Emirates'];


  back(): void {
    this.index -= 1;
  }

  next(): void {
    this.index += 1;
  }
  disable = false;

  listOfData: Store[] = [
    {
      store: 'Point of sale',
      num1: '0',
      num2: '3',
      num3: '5',
      num4: '5',
    },
    {
      store: 'Store languages',
      num1: '0',
      num2: '3',
      num3: '5',
      num4: '5',
    },
    {
      store: 'In-Store pickup',
      num1: '0',
      num2: '3',
      num3: '5',
      num4: '5',
    },
    {
      store: 'Local in store',
      num1: 'check',
      num2: 'close',
      num3: 'check',
      num4: 'check',
    },
    {
      store: 'Custome domain',
      num1: 'check',
      num2: 'close',
      num3: 'check',
      num4: 'check',
    },
    {
      store: 'Customizing store design',
      num1: 'check',
      num2: 'close',
      num3: 'check',
      num4: 'check',
    },

  ];

  listOfDataTow: Store[] = [
    {
      store: 'Point of sale',
      num1: '0',
      num2: '3',
      num3: '5',
      num4: '5',
    },
    {
      store: 'Store languages',
      num1: '0',
      num2: '3',
      num3: '5',
      num4: '5',
    },
    {
      store: 'In-Store pickup',
      num1: '0',
      num2: '3',
      num3: '5',
      num4: '5',
    },
    {
      store: 'Local in store',
      num1: 'check',
      num2: 'check',
      num3: 'close',
      num4: 'check',
    },
    {
      store: 'Custome domain',
      num1: 'close',
      num2: 'close',
      num3: 'check',
      num4: 'check',
    },
    {
      store: 'Customizing store design',
      num1: 'check',
      num2: 'check',
      num3: 'close',
      num4: 'check',
    },

  ];
  listOfData2: Store2[] = [
    {
      store: 'Point of sale',
      num1: '0',
    },
    {
      store: 'In-Store pickup',
      num1: '4'
    },
    {
      store: 'Local in store',
      num1: 'check'
    },
    {
      store: 'Custome domain',
      num1: 'close'
    },
    {
      store: 'Customizing store design',
      num1: 'close'
    },
  ];
  listOfData3: Store2[] = [
    {
      store: 'Point of sale',
      num1: '2',
    },
    {
      store: 'In-Store pickup',
      num1: '7'
    },
    {
      store: 'Local in store',
      num1: 'check'
    },
    {
      store: 'Custome domain',
      num1: 'close'
    },
    {
      store: 'Customizing store design',
      num1: 'close'
    },
  ];
  listOfData4: Store2[] = [
    {
      store: 'Point of sale',
      num1: '2',
    },
    {
      store: 'In-Store pickup',
      num1: '3'
    },
    {
      store: 'Local in store',
      num1: 'check'
    },
    {
      store: 'Custome domain',
      num1: 'close'
    },
    {
      store: 'Customizing store design',
      num1: 'close'
    },
  ];
  onIndexChange(index: number): void {
    this.index = index;
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

  constructor(private fb: UntypedFormBuilder, nzconservice: NzIconService, config: NgbCarouselConfig) {
    // const current = this.localizationService.currentLang;
    // if (current === 'ar') {
    //   this.isRtl = true;
    // }
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.filteredOptions = this.options;

  }
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  ngOnInit(): void {

  }
}
