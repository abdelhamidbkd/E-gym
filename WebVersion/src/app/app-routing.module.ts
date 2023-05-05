import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './components/pages/main-home/main-home.component';

import { ErrorPageComponent } from './components/pages/error-page/error-page.component';

import { RegisterComponent } from './components/pages/register/register.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { CoachComponent } from './components/pages/coach/coach.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { MemberComponent } from './components/pages/member/member.component';
import { AuthMemberService } from './components/services/auth-member.service';
import { AuthCoachService } from './components/services/auth-coach.service';
import { AuthAdminService } from './components/services/auth-admin.service';

const routes: Routes = [
    {path: '', component: MainHomeComponent},
    {path: 'error', component: ErrorPageComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'coach', component: CoachComponent ,canActivate:[AuthCoachService]},
    {path: 'member', component: MemberComponent,canActivate:[AuthMemberService]},
    {path: 'admin', component: AdminComponent,canActivate:[AuthAdminService]},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }