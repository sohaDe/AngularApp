import { Component, HostListener, OnInit } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

export interface Order {
  id: number;
  customer: string;
  price: number;
  date: string;
  type: string;
  salesChannel:string;
  status: string;
  payment: string;
  shipping:string
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})

export class OrderComponent implements OnInit {
  name='Joint procedures';
  current=1;
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
  
  isBordered:boolean;

  searchValue = '';
  date = null;
  dateRange: Date[];
 
  isEnglish = false;

  listOfData: Order[] = [
    {
      id: 44,
      customer: 'Khalil hanafi',
      price: 27.00,
      date: '14 Sep,2023',
      type: 'Delivery',
      status: 'New',
      salesChannel:'Point of sale',
      payment: 'Paid',
      shipping:'Shipped'
    },
    {
      id: 44,
      customer: 'Khalil hanafi',
      price: 27.00,
      date: '14 Sep,2023',
      type: 'Delivery',
      status: 'Awaiting shipped',
      salesChannel:'Point of sale',
      payment: 'Paid',
      shipping:'Pending'

    },
    {
      id: 44,
      customer: 'Khalil hanafi',
      price: 27.00,
      date: '14 Sep,2023',
      type: 'Delivery',
      status: 'Shipped done',
      salesChannel:'Store',
      payment: 'Unpaid',
      shipping:'Shipped'

    },
    {
      id: 44,
      customer: 'Khalil hanafi',
      price: 27.00,
      date: '14 Sep,2023',
      type: 'Delivery',
      status: 'Awaiting payment',
      salesChannel:'Market Bliss',
      payment: 'Unpaid',
      shipping:'Shipped'

    },
    {
      id: 44,
      customer: 'Khalil hanafi',
      price: 27.00,
      date: '14 Sep,2023',
      type: 'Delivery',
      status: 'Ready',
      salesChannel:'Store',
      payment: 'Paid',
      shipping:'Pending'

    },
    {
      id: 44,
      customer: 'Khalil hanafi',
      price: 27.00,
      date: '14 Sep,2023',
      type: 'Delivery',
      status: 'Shipped done',
      salesChannel:'Store',
      payment: 'Unpaid',
      shipping:'Shipped'

    },
    {
      id: 44,
      customer: 'Khalil hanafi',
      price: 27.00,
      date: '14 Sep,2023',
      type: 'Delivery',
      status: 'Completed',
      salesChannel:'Point of Sale',
      payment: 'Paid',
      shipping:'Shipped'
    },
    

  ]

  constructor(
    private i18n: NzI18nService,
 
   
  ) {}

  
  ngOnInit() {
    this.i18n.setLocale(en_US);
    this.isBordered=this.isTableBorderd();
   
 
  }
  @HostListener('window:resize',['$event'])
  onResize(){
    this.isBordered=this.isTableBorderd()
  }
  isTableBorderd():boolean{
    return window.innerWidth > 912;
  }

  getColor(status: string): string {
    switch (status) {
      case 'New':
        return '#8F78BB';
      case 'Awaiting shipped':
        return '#F0AC4C';
      case 'Ready':
        return '#EA7F7F';
      case 'Completed':
        return '#36CBC5';
      case 'Shipped done':
        return '#CC8F7F';
      case 'Awaiting payment':
        return '#008CFF';
        case 'Payment done':
        return '#8392A5';
        default:
      return '';
    }
  }

  listOfDisplayData = [...this.listOfData];
  search(search) {
    const targetValue: any[] = [];
    this.listOfDisplayData.forEach((value: any) => {
      let keys = Object.keys(value);
      for (let i = 0; i < keys.length; i++) {
        if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
          targetValue.push(value);
          break;
        }
      }
    });
    this.listOfData = targetValue;
  }


  onChange(event) {
    this.dateRange = event;
  }

  filterByDate() {
    const filteredData = this.listOfData.filter(data => {

      const date = new Date(data.date);

      return date >= this.dateRange[0] &&
        date <= this.dateRange[1];

    });

    this.listOfData = filteredData;
  }

  filteredStatus: string[] = [];
  filterTable(status: string): void {
    if (status === 'All Orders') {
      this.filteredStatus = [];
    } else {
      this.filteredStatus = [status];
    }
  }
}
  
