import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
	selector: 'app-navbar-style-one',
	templateUrl: './navbar-style-one.component.html',
	styleUrls: ['./navbar-style-one.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class NavbarStyleOneComponent implements OnInit {

	location: any;
    containerClass: any;

   

	constructor(

        private loginservice: AuthentificationService ,
        private router: Router,
        location: Location
    ) {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
                if (this.location == '/bosting' || this.location == '/magazine' || this.location == '/tournaments' || this.location == '/streaming'){
                    this.containerClass = 'container';
                } else {
                    this.containerClass = 'container-fluid';
                }
            }
        });
    }


    adminlogged=this.loginservice.isAdminLoggedIn();
   memberlogged=this.loginservice.isMemberLoggedIn();
    coachlogged=this.loginservice.isCoachLoggedIn();

    logout(){
        if(this.adminlogged){this.loginservice.logOutAdmin(); this.ngOnInit()}
        if(this.memberlogged){this.loginservice.logOutMember(); this.ngOnInit()}
        if(this.coachlogged){this.loginservice.logOutCoach(); this.ngOnInit()}

    }
	ngOnInit(): void {
	}

}