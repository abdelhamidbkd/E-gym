import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SportsComponent } from './sports/sports.component';
import { TrainingComponent } from './training/training.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'signin', component: SigninComponent },
  { path: 'allpages', component: PagesListComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'profile', component: ProfileComponent },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'sport',
    loadChildren: () => import('./sport/sport.module').then( m => m.SportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
