import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ENSEÑA.ME';
  version = 'beta';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    for (let nameEspecific of ['edit', 'delete', 'plus', 'create', 'close', 'accept']) {
      this.matIconRegistry.addSvgIcon(nameEspecific,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/" + nameEspecific + ".svg"));
    }
  }
}
