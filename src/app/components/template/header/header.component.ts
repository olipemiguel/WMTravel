import { Component, OnInit } from '@angular/core';
import Translate from '../../../../assets/json/lang.json';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  language = localStorage.getItem('lang') || 'pt';
  header_home!: string;
  header_about!: string;
  header_service!: string;
  header_contact!: string;
  constructor() {
    if (this.language === 'en') {
      this.header_home = Translate.en.header.home;
      this.header_about = Translate.en.header.about;
      this.header_service = Translate.en.header.service;
      this.header_contact = Translate.en.header.contact;
    } else {
      this.header_home = Translate.pt.header.home;
      this.header_about = Translate.pt.header.about;
      this.header_service = Translate.pt.header.service;
      this.header_contact = Translate.pt.header.contact;
    }
  }
  ngOnInit(): void {
  }
  Lang(event: Event){
    const lang = event.target as HTMLElement;
    if(lang.id === 'pt'){
      localStorage.setItem('lang', 'pt');
      location.reload();
    }else{
      localStorage.setItem('lang', 'en');
      location.reload();
    }
  }
}
