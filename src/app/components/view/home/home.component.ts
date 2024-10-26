import { Component, OnInit } from '@angular/core';
import Translate from "../../../../assets/json/lang.json";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // ? Estaremos realizando reload do arquivo lang.json pra interagir com a pagina com o idioma do cliente!
  language = localStorage.getItem('lang') || 'pt';
  // TODO: Estaremos realizando as tipagem de todos elements das paginas.
  home_welcome_title !: string;
  home_welcome_paragraph !: string;
  home_welcome_link !: string;
  home_mundial_title !: string;
  home_mundial_paragraph !: string;
  home_mundial_link !: string;
  home_reservations_title !: string;
  home_reservations_paragraph !: string;
  home_reservations_link !: string;
  constructor() {
    if(this.language === 'en'){
      this.home_welcome_title = Translate.en.home.welcome.title;
      this.home_welcome_paragraph = Translate.en.home.welcome.paragraph;
      this.home_welcome_link = Translate.en.home.welcome.link;
      this.home_mundial_title = Translate.en.home.mundial.title;
      this.home_mundial_paragraph = Translate.en.home.mundial.paragraph;
      this.home_mundial_link = Translate.en.home.mundial.link;
      this.home_reservations_title = Translate.en.home.reservations.title;
      this.home_reservations_paragraph = Translate.en.home.reservations.paragraph;
      this.home_reservations_link = Translate.en.home.reservations.link;
    }else{
      this.home_welcome_title = Translate.pt.home.welcome.title;
      this.home_welcome_paragraph = Translate.pt.home.welcome.paragraph;
      this.home_welcome_link = Translate.pt.home.welcome.link;
      this.home_mundial_title = Translate.pt.home.mundial.title;
      this.home_mundial_paragraph = Translate.pt.home.mundial.paragraph;
      this.home_mundial_link = Translate.pt.home.mundial.link;
      this.home_reservations_title = Translate.pt.home.reservations.title;
      this.home_reservations_paragraph = Translate.pt.home.reservations.paragraph;
      this.home_reservations_link = Translate.pt.home.reservations.link;
    }
  }

  ngOnInit(): void {
    this.Header();

  }
  // ! Function Globais
  Header(){
    const home = document.querySelector(".app-home") as HTMLElement;
    const header = document.querySelector("#app-header") as HTMLElement;
    home?.addEventListener("mouseleave", () => {
      header.style.backgroundColor = "#211E3B";
      header.style.transition = "background-color 0.3s ease-in-out";
    });
    home?.addEventListener("touchend", () => {
      header.style.backgroundColor = "#211E3B";
      header.style.transition = "background-color 0.3s ease-in-out";
    });
    // home?.addEventListener("touchmove", () => {
    //   header.style.backgroundColor = "transparent";
    //   header.style.transition = "background-color 0.3s ease-in-out";
    // });
    // home?.addEventListener("mouseover", () => {
    //   header.style.backgroundColor = "transparent";
    //   header.style.transition = "background-color 0.3s ease-in-out";
    // });
    const headers = document.querySelectorAll(".app-redirect");
    headers.forEach((element) => {
      element?.addEventListener("click", () => {
        header.style.backgroundColor = "#211E3B";
        header.style.transition = "background-color 0.3s ease-in-out";
      });
    })

  }
  NavHome(event: Event){
    const events = event.target as HTMLElement;
    const ControlMain = document.querySelector(".app-control-box") as HTMLElement;
    const ControlBox = document.querySelectorAll(".app-main-box");
    const BannerHome = document.querySelector("#banner") as HTMLElement;
    const NavHome = document.querySelector("#active-nav") as HTMLElement;
    NavHome.removeAttribute("id");
    switch(events.accessKey){
      case '0':
        BannerHome.className = "app-home app-home-bg-one app-flex";
        events.setAttribute("id","active-nav");
        ControlMain.setAttribute("style","justify-content: flex-start !important;");
        ControlBox[0].className = "app-main-box control-box-start app-flex";
        ControlBox[1].className = "app-main-box control-box-center display-none";
        ControlBox[2].className = "app-main-box control-box-end display-none";
        break;
      case '1':
        BannerHome.className = "app-home app-home-bg-two app-flex";
        events.setAttribute("id","active-nav");
        ControlMain.setAttribute("style","justify-content: center !important;");
        ControlBox[0].className = "app-main-box control-box-start display-none";
        ControlBox[1].className = "app-main-box control-box-center app-flex";
        ControlBox[2].className = "app-main-box control-box-end display-none";
        break;
      case '2':
        BannerHome.className = "app-home app-home-bg-tree app-flex";
        events.setAttribute("id","active-nav");
        ControlMain.setAttribute("style","justify-content: flex-end !important;");
        ControlBox[0].className = "app-main-box control-box-start display-none";
        ControlBox[1].className = "app-main-box control-box-center display-none";
        ControlBox[2].className = "app-main-box control-box-end app-flex";
        break;
      default:
        break;
    }
  }

}
