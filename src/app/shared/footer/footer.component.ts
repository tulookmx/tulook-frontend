import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tl-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks: any;

  constructor() {
    this.footerLinks = [
      [ 'informacion', 'nosotros', 'publicidad', 'empleo', 'contacto', 'faq' ],
      [ 'afiliados', 'programa de afiliados', 'afiliate', 'blog' ],
      [ 'sitio', 'mapa del sitio', 'terminos y condiciones', 'privacidad', 'busquedas' ],
      [ 'conectate' ]
    ];
  }

  ngOnInit() {
  }

}
