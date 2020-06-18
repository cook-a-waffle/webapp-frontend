import { Component } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-bottom-nav',
    templateUrl: './bottom-nav.component.html',
    styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent {
    faUser = faUser;
    faBars = faBars;
    faStroopwafel = faStroopwafel;
    faHome = faHome;
    faPlusCircle = faPlusCircle;
}