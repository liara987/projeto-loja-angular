import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';


@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    imports: [SearchBarComponent]
})
export class NavBarComponent {

}
