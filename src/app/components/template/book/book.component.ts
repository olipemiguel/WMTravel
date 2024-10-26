import { Component, OnInit } from '@angular/core';
import Translate from '../../../../assets/json/lang.json';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  language = localStorage.getItem('lang') || 'pt';
  book_title !: string;
  book_title_sub !: string;
  book_adult !: string;
  book_children !: string;
  book_submit !: string;
  book_start_date !: string;
  book_end_date !: string;
  constructor() {
    if(this.language === 'en'){
      this.book_title = Translate.en.book.title;
      this.book_title_sub = Translate.en.book.title_sub;
      this.book_adult = Translate.en.book.adults;
      this.book_children = Translate.en.book.children;
      this.book_submit = Translate.en.book.submit;
    }else{
      this.book_title = Translate.pt.book.title;
      this.book_title_sub = Translate.pt.book.title_sub;
      this.book_adult = Translate.pt.book.adults;
      this.book_children = Translate.pt.book.children;
      this.book_submit = Translate.pt.book.submit;
    }

  }
  ngOnInit(): void {
    const book_start = document.querySelector("#book-start");
    const date = new Date();
    this.book_start_date = `${date.getFullYear()}-${date.getMonth()+1}-${(date.getDate()+1)}`;
    this.book_end_date = `${(date.getFullYear()+1)}-${date.getMonth()+1}-${date.getDate()}`;
  }
  Books(event: Event){
    event.preventDefault();
    window.open("https://wa.me/447551782944?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20funciona%20a%20ag%C3%AAncia%20de%20turismo%3F", "_blank");
  }

}
