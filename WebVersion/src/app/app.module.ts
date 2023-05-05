import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule}from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { MainHomeComponent } from './components/pages/main-home/main-home.component';
import { MainBannerComponent } from './components/pages/main-home/main-banner/main-banner.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';

import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';

import { NewsComponent } from './components/common/news/news.component';
import { PartnerComponent} from './components/common/partner/partner.component';
import { SocialComponent } from './components/common/social/social.component';
import { TeamComponent } from './components/common/team/team.component';

import { ErrorPageComponent } from './components/pages/error-page/error-page.component';

import { RegisterComponent } from './components/pages/register/register.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { CoachComponent } from './components/pages/coach/coach.component';
import { AddSessionComponent } from './components/pages/coach/add-session/add-session.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddPostComponent } from './components/pages/coach/add-post/add-post.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { AddSportComponent } from './components/pages/admin/add-sport/add-sport.component';
import { AddCoachComponent } from './components/pages/admin/add-coach/add-coach.component';
import { AddRoomComponent } from './components/pages/admin/add-room/add-room.component';
import { EditCoachComponent } from './components/pages/admin/edit-coach/edit-coach.component';
import { EditSportComponent } from './components/pages/admin/edit-sport/edit-sport.component';
import { EditRoomComponent } from './components/pages/admin/edit-room/edit-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatRadioModule} from '@angular/material/radio';
import {NgxPayPalModule} from 'ngx-paypal';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MemberComponent } from './components/pages/member/member.component';
import { SportComponent } from './components/pages/search/sport/sport.component';
import { PostComponent } from './components/pages/search/post/post.component';
import { SearchComponent } from './components/pages/search/search/search.component';
import { ActivateComponent } from './components/pages/member/activate/activate.component';
import { AllDatesComponent } from './components/pages/coach/all-dates/all-dates.component';


@NgModule({
  declarations: [
    NewsComponent,
    TeamComponent,
    PartnerComponent,
    SocialComponent,
    AppComponent,
    PreloaderComponent,
    MainHomeComponent,
    MainBannerComponent,
    NavbarStyleOneComponent,
    FooterStyleTwoComponent,
    ErrorPageComponent,
    RegisterComponent,
    SigninComponent,
    CoachComponent,
    AddSessionComponent,
    AddPostComponent,
    AdminComponent,
    AddSportComponent,
    AddCoachComponent,
    AddRoomComponent,
    EditCoachComponent,
    EditSportComponent,
    EditRoomComponent,
    MemberComponent,
    SportComponent,
    PostComponent,
    SearchComponent,
    ActivateComponent,
    AllDatesComponent,
  ],
  imports: [
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBD_A4B6x-5quYIvzXtCOsoUYWTm2hdPbw",
    authDomain: "egym-a0e75.firebaseapp.com",
    projectId: "egym-a0e75",
    storageBucket: "egym-a0e75.appspot.com",
    messagingSenderId: "584318548525",
    appId: "1:584318548525:web:f39647046f4996033296a4"
    }),
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    NgxPayPalModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
   
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
