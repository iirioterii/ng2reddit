import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    addArticle(title: HTMLInputElement, description: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding article title: ${title.value},  description: ${description.value}, link: ${link.value}`);
        return false;
    }
}
