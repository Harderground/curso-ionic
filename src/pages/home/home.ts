import { Component } from '@angular/core';
import { NavController, Refresher,reorderArray } from 'ionic-angular';
import { ANIMALES } from '../../data/data.animales';
import { Animal } from '../../interfaces/animales.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animales: Animal[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenando:boolean=false;
  constructor(public navCtrl: NavController) {
    this.animales = ANIMALES.slice(0);

  }
  reproducir(animal: Animal) {
    console.log(animal);
    this.pausar_audio(animal);
    if (animal.reproduciendo) {
      animal.reproduciendo = false;
      return;
    }
    this.audio.src = animal.audio;
    this.audio.load();
    this.audio.play();
    animal.reproduciendo = true;
    this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);
  }
  private pausar_audio(animalSel: Animal) {
    clearTimeout(this.audioTiempo);
    this.audio.pause();
    this.audio.currentTime = 0;
    for (let animal of this.animales) {
      if (animal.nombre != animalSel.nombre) {
        animal.reproduciendo = false;
      }
    }
  }
  borrarAnimal(index: any) {
    this.animales.splice(index, 1);
  }
  recargaLista(refresher: Refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      this.animales = ANIMALES.slice(0);
      refresher.complete();
    }, 1000);
  }
  ordenarAnimales(index:any){
    console.log(index);
    this.animales = reorderArray(this.animales,index);
  }
}