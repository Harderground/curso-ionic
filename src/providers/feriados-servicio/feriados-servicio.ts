import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FeriadosServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeriadosServicioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FeriadosServicioProvider Provider');
  }
  obtenerFeriados() {
    return this.http.get("https://www.feriadosapp.com/api/holidays.json");
  }
}
