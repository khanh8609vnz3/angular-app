import {Component} from '@angular/core';
import {
    Event,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router
} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    isLoading = false;

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.isLoading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.isLoading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
}
