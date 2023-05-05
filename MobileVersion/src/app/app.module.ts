import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SportsComponent } from './sports/sports.component';
import { TrainingComponent } from './training/training.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ProfileComponent } from './profile/profile.component';
import { SportPage } from './sport/sport.page';
import { PostPage } from './post/post.page';
import { AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule}from '@angular/fire';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { PdfViewerService } from './Services/pdf/pdf-viewer.service';
import { HTTP } from '@ionic-native/http/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

@NgModule({
  declarations: [AppComponent,SigninComponent,PagesListComponent,ScheduleComponent,SportPage,
    PostPage,
    SportsComponent
  ,TrainingComponent,NutritionComponent,ProfileComponent
  
  ],
  entryComponents: [],
  imports: [BrowserModule, 
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyBD_A4B6x-5quYIvzXtCOsoUYWTm2hdPbw",
  authDomain: "egym-a0e75.firebaseapp.com",
  projectId: "egym-a0e75",
  storageBucket: "egym-a0e75.appspot.com",
  messagingSenderId: "584318548525",
  appId: "1:584318548525:web:f39647046f4996033296a4"
  })
  ,AngularFireStorageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    IonicModule.forRoot(), AppRoutingModule],
  providers: [ FileTransfer,
    FileOpener,DocumentViewer,
    File,
    PdfViewerService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
