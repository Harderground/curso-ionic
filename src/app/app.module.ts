import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RutPage } from '../pages/rut/rut';

import { RutServicioProvider } from '../providers/rut-servicio/rut-servicio';
import { HttpClientModule } from '@angular/common/http';
import { FeriadosServicioProvider } from '../providers/feriados-servicio/feriados-servicio';
import { FeriadosPage } from '../pages/feriados/feriados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RutPage,
    FeriadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RutPage,
    FeriadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RutServicioProvider,
    FeriadosServicioProvider
    
  ]
})
export class AppModule {}
