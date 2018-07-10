import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RutServicioProvider } from '../../providers/rut-servicio/rut-servicio';



@IonicPage()
@Component({
  selector: 'page-rut',
  templateUrl: 'rut.html',
})
export class RutPage {
  public personaRut: any = {};
  public personasNombres:any;
  public servel: any = {};
  public rut: any;
  public nombre: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _RutService: RutServicioProvider) {
    this.rut = "";
    this.nombre = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutPage');
  }
  buscarPorRut() {
    this.obtenerPorRut(this.rut);
  }
  buscarPorNombre() {
    this.obtenerPorNombre(this.nombre);
  }
  obtenerPorNombre(nombre: any) {
    this._RutService.obtenerPorNombre(nombre).subscribe(
      result => {
        console.log(result);
        this.personasNombres = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  detallePersona(rut:any){
    this.obtenerPorRut(rut);
  }
  obtenerPorRut(rut: any) {
    this._RutService.obtenerPorRut(rut).subscribe(
      result => {
        console.log(result);
        this.personaRut = result;
        this.servel = this.personaRut.servel;
      },
      error => {
        console.log(error);
      }
    );
  }
}
