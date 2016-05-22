import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesMapService {
  mapSpanishToEnglish: any;
  mapEnglishToSpanish: any;

  constructor() {
    this.mapSpanishToEnglish = {
      'mujeres': 'womens',
      'calzado-mujeres': 'womens-shoes',
      'ropa-mujeres': 'womens-clothes',
      'bolsas': 'handbags',
      'belleza-mujeres': 'womens-beauty',
      'hombres': 'men',
      'ropa-hombres': 'men-clothes',
      'mochilas-hombres': 'men-bags',
      'zapatos-hombres': 'men-shoes',
      'aseo-hombres': 'men-grooming',
      'bebes': 'kids-and-baby',
      'hogar': 'living',
      'ofertas': 'offers',
      'liquidacion': 'sale',
    };
    this.mapEnglishToSpanish = {
      'clothing': 'ropa',
      'shoes': 'calzado',
      'women\'s fashion': 'mujeres',
      'men\'s fashion': 'hombres',
      'kids\' nursery, clothes and toys': 'ropa y juguetes de bebe',
      'home & living': 'hogar & vida'
    };
  }

  translateToEnglish(category: string): string {
    if (this.mapSpanishToEnglish[category.toLowerCase()]) {
      return this.mapSpanishToEnglish[category.toLowerCase()];
    }
    return null;
  }

  translateToSpanish(category: string): string {
    if (this.mapEnglishToSpanish[category.toLowerCase()]) {
      return this.mapEnglishToSpanish[category.toLowerCase()];
    }
    return null;
  }

}
