import { Component } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param = {value: 'world', value2: 'Polska'};
  title: 'aa';

  constructor(public translate: TranslateService) {
    this.translateValues(translate);
  }

  translateValues(translate: TranslateService) {
    translate.addLangs(['en', 'pl']);

    const browserLang = translate.getBrowserLang();
    console.log('browserLang' + browserLang);

    translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }

  public changeLanguage(language: string) {
    console.log("change language")
    this.translate.currentLang = language;
    this.translate.setTranslation(language, {value1: language + ' TEST'}, true);
    // this.translate.use(language);
  }

  public getLanguages() {
    return this.translate.getLangs();
  }

  public getCurrentLanguage() {
    return this.translate.currentLang;
  }

}
