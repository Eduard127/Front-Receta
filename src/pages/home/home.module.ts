import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from '../../app/app.component';

import { RecetaPage } from '../Receta/Receta';
import { HomePage } from './home';

@NgModule({
  declarations: [
    MyApp,
    RecetaPage,
    HomePage,
    HomeModule
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(HomeModule)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecetaPage,
    HomePage,
    HomeModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class HomeModule {}
