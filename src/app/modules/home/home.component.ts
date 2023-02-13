import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
    constructor(private titleService: Title) {
        this.titleService.setTitle('IBA Tours and Travels - Home')
     }

    ngOnInit(): void { }
}
