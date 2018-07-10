import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeriadosServicioProvider } from '../../providers/feriados-servicio/feriados-servicio';


@IonicPage()
@Component({
  selector: 'page-feriados',
  templateUrl: 'feriados.html',
})
export class FeriadosPage {

  public feriados: any;
  public feriadosFormat:any;
  public mes:any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public _feriadoService: FeriadosServicioProvider) {
    this.feriados = [];
    this.feriadosFormat = [];
    this.mes =  new Date().getMonth() +1 ;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeriadosPage',this.mes);
    this.obtenerFeriados();
  }
  obtenerFeriados() {
    this._feriadoService.obtenerFeriados().subscribe(
      result => {
        console.log(result);
        this.feriados = result;
       
        this.feriados = this.feriados.data;
        this.formatoFecha();
        console.log(this.feriadosFormat);

      },
      error => {
        console.log(error);
      }
    );
  }
  formatoFecha(){
    let dia;
    let mes;
    let year;
    for (let i = 0; i < this.feriados.length; i++) {
      dia = this.feriados[i].date.substring(8,10);
      mes = this.feriados[i].date.substring(5,7);
      year = this.feriados[i].date.substring(0,4);
      this.feriados[i].date = dia + "/" + mes + "/" + year;
      if (year == 2018){
        this.feriadosFormat.push(this.feriados[i]);
      }
      
    }

  }
  goRut(){
    this.navCtrl.pop();
  }

}
