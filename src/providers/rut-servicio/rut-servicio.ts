import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
