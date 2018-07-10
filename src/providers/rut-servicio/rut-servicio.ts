import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RutServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RutServicioProvider {
  public endPoint: string = 'https://api.rutify.cl/'
  constructor(public http: HttpClient) {
    console.log('Hello RutServicioProvider Provider');
  }
  obtenerPorRut(rut:any) {
    return this.http.get('https://api.rutify.cl/rut/'+rut);
  }
  obtenerPorNombre(query:any){
    return this.http.get('https://api.rutify.cl/search?q='+query);
  }
}
