import { Component, OnInit } from '@angular/core';
import Translate from '../../../../assets/json/lang.json';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  language = localStorage.getItem('lang') || 'pt';
  contact_header_title !: string;
  contact_header_title_sub !: string;
  contact_header_paragraph !: string;
  contact_form_name !: string;
  contact_form_email !: string;
  contact_form_subject !: string;
  contact_form_submit !: string;
  contact_form_info_address !: string;
  contact_form_info_mobile !: string;
  contact_form_info_email !: string;
  contact_form_data_address !: string;
  contact_form_data_mobile !: string;
  contact_form_data_email !: string;
  constructor() {
    if(this.language === 'en'){
      this.contact_header_title = Translate.en.contact.header.title;
      this.contact_header_title_sub = Translate.en.contact.header.title_sub;
      this.contact_header_paragraph = Translate.en.contact.header.paragraph;
      this.contact_form_name = Translate.en.contact.form.name;
      this.contact_form_email = Translate.en.contact.form.email;
      this.contact_form_subject = Translate.en.contact.form.subject;
      this.contact_form_submit = Translate.en.contact.form.submit;
      this.contact_form_info_address = Translate.en.contact.info.address;
      this.contact_form_info_mobile = Translate.en.contact.info.mobile;
      this.contact_form_info_email = Translate.en.contact.info.email;
      this.contact_form_data_address = Translate.en.contact.data.address;
      this.contact_form_data_mobile = Translate.en.contact.data.mobile;
      this.contact_form_data_email = Translate.en.contact.data.email;
    }else{
      this.contact_header_title = Translate.pt.contact.header.title;
      this.contact_header_title_sub = Translate.pt.contact.header.title_sub;
      this.contact_header_paragraph = Translate.pt.contact.header.paragraph;
      this.contact_form_name = Translate.pt.contact.form.name;
      this.contact_form_email = Translate.pt.contact.form.email;
      this.contact_form_subject = Translate.pt.contact.form.subject;
      this.contact_form_submit = Translate.pt.contact.form.submit;
      this.contact_form_info_address = Translate.pt.contact.info.address;
      this.contact_form_info_mobile = Translate.pt.contact.info.mobile;
      this.contact_form_info_email = Translate.pt.contact.info.email;
      this.contact_form_data_address = Translate.pt.contact.data.address;
      this.contact_form_data_mobile = Translate.pt.contact.data.mobile;
      this.contact_form_data_email = Translate.pt.contact.data.email;
    }
  }

  ngOnInit(): void {
  }
  Contact(event: Event){
    event.preventDefault();
    window.open("https://wa.me/447551782944?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20funciona%20a%20ag%C3%AAncia%20de%20turismo%3F", "_blank");
  }
}
