import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
        <div>{{ 'HELLO' | translate:param }}</div>
        <!-- <div>{{ 'HELLO' }}</div> -->
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param = {value: 'world'};

  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use('en');
}

  title = 'vtuber-urn';
}
