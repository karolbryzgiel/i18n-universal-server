import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateLoader} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TranslationService  implements TranslateLoader {

  constructor(http: HttpClient) {
  }

  getTranslation(lang: string): Observable<any> {
    console.log("Wczytuje translacje");
    if(lang === 'en') {
      return of(
        {
          'value1': 'This is value first',
          'value2': 'This is value second',
          'value3': 'This is value third',
          'firstPageHeader': 'Welcome on First Page!',
          'firstPageDescription': 'This is first page of i18n-database app',
          'secondPageHeader': 'Welcome on Second page!',
          'secondPageDescription': 'Testing i18n on other pages',
        },
      );
    } else if(lang === 'pl') {
      return of(
        {
          'value1': 'To jest wartosc 1',
          'value2': 'To jest wartosc 2',
          'value3': 'To jest wartosc 3',
          'firstPageHeader': 'Witaj na stronie pierwszej!',
          'firstPageDescription': 'To jest strona pierwsza aplikacji i18n-database',
          'secondPageHeader': 'Witaj na stronie drugiej!',
          'secondPageDescription': 'Testuję i18n na różnych stronach',
        },
      );
    }
    console.log('translationService: ' + lang);
  }

}
