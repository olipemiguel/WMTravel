import { Component, OnInit } from '@angular/core';
import Translate from '../../../../assets/json/lang.json';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  language = localStorage.getItem('lang') || 'pt';
  about_title !: string;
  about_paragraph !: string;
  about_info !: string;
  about_link !: string;
  constructor() {
    if(this.language === 'en'){
      this.about_title = Translate.en.about.title;
      this.about_paragraph = Translate.en.about.paragraph;
      this.about_info = Translate.en.about.info;
      this.about_link = Translate.en.about.link;
    }else{
      this.about_title = Translate.pt.about.title;
      this.about_paragraph = Translate.pt.about.paragraph;
      this.about_info = Translate.pt.about.info;
      this.about_link = Translate.pt.about.link;
    }
  }
  ngOnInit(): void {
  }

}
