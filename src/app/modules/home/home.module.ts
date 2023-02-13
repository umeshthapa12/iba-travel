import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// Third party libraries
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';  
// Custom Components and modules
import { HomeComponent } from './home.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { FlashDealsComponents } from './components/flash-deals/flash-deals.component';
import { PopularPlacesComponent } from './components/popular-places/popular-places.component';
import { DateCountdown } from "../../shared/date-countdown/date-countdown";
@NgModule({
    declarations: [
        HomeComponent,
        TopBannerComponent,
        FlashDealsComponents,
        PopularPlacesComponent,
        DateCountdown
    ],
    exports: [],
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMatSelectSearchModule,
        NgxMatTimepickerModule,
        RouterModule.forChild([{ path: '', component: HomeComponent }])
    ]
})
export class HomeModule {}