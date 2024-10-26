import { Component, OnInit } from '@angular/core';
import Translate from '../../../../assets/json/lang.json';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  language = localStorage.getItem('lang') || 'pt';
  service_header_title !: string;
  service_header_title_sub !: string;
  service_header_paragraph !: string;
  service_box_treatment_title !: string;
  service_box_treatment_paragraph !: string;
  service_box_resorts_title !: string;
  service_box_resorts_paragraph !: string;
  service_box_wifi_title !: string;
  service_box_wifi_paragraph !: string;
  service_box_support_title !: string;
  service_box_support_paragraph !: string;
  service_box_motorist_title !: string;
  service_box_motorist_paragraph !: string;
  service_box_cruises_title !: string;
  service_box_cruises_paragraph !: string;
  service_box_parking_title !: string;
  service_box_parking_paragraph !: string;
  service_box_flight_title !: string;
  service_box_flight_paragraph !: string;
  constructor() {
    if(this.language === 'en'){
      this.service_header_title = Translate.en.service.header.title;
      this.service_header_title_sub = Translate.en.service.header.title_sub;
      this.service_header_paragraph = Translate.en.service.header.paragraph;

      this.service_box_treatment_title = Translate.en.service.box.treatment.title;
      this.service_box_treatment_paragraph = Translate.en.service.box.treatment.paragraph;
      this.service_box_resorts_title = Translate.en.service.box.resort.title;
      this.service_box_resorts_paragraph = Translate.en.service.box.resort.paragraph;
      this.service_box_wifi_title = Translate.en.service.box.wifi.title;
      this.service_box_wifi_paragraph = Translate.en.service.box.wifi.paragraph;
      this.service_box_support_title = Translate.en.service.box.support.title;
      this.service_box_support_paragraph = Translate.en.service.box.support.paragraph;
      this.service_box_motorist_title = Translate.en.service.box.motorist.title;
      this.service_box_motorist_paragraph = Translate.en.service.box.motorist.paragraph;
      this.service_box_cruises_title = Translate.en.service.box.cruises.title;
      this.service_box_cruises_paragraph = Translate.en.service.box.cruises.paragraph;
      this.service_box_parking_title = Translate.en.service.box.parking.title;
      this.service_box_parking_paragraph = Translate.en.service.box.parking.paragraph;
      this.service_box_flight_title = Translate.en.service.box.flight.title;
      this.service_box_flight_paragraph = Translate.en.service.box.flight.paragraph;
    }else{
      this.service_header_title = Translate.pt.service.header.title;
      this.service_header_title_sub = Translate.pt.service.header.title_sub;
      this.service_header_paragraph = Translate.pt.service.header.paragraph;

      this.service_box_treatment_title = Translate.pt.service.box.treatment.title;
      this.service_box_treatment_paragraph = Translate.pt.service.box.treatment.paragraph;
      this.service_box_resorts_title = Translate.pt.service.box.resort.title;
      this.service_box_resorts_paragraph = Translate.pt.service.box.resort.paragraph;
      this.service_box_wifi_title = Translate.pt.service.box.wifi.title;
      this.service_box_wifi_paragraph = Translate.pt.service.box.wifi.paragraph;
      this.service_box_support_title = Translate.pt.service.box.support.title;
      this.service_box_support_paragraph = Translate.pt.service.box.support.paragraph;
      this.service_box_motorist_title = Translate.pt.service.box.motorist.title;
      this.service_box_motorist_paragraph = Translate.pt.service.box.motorist.paragraph;
      this.service_box_cruises_title = Translate.pt.service.box.cruises.title;
      this.service_box_cruises_paragraph = Translate.pt.service.box.cruises.paragraph;
      this.service_box_parking_title = Translate.pt.service.box.parking.title;
      this.service_box_parking_paragraph = Translate.pt.service.box.parking.paragraph;
      this.service_box_flight_title = Translate.pt.service.box.flight.title;
      this.service_box_flight_paragraph = Translate.pt.service.box.flight.paragraph;
    }
  }

  ngOnInit(): void {
  }

}
