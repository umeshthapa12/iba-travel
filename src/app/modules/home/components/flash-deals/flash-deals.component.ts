import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'flash-deals',
    templateUrl: './flash-deals.component.html',
    styleUrls: ['./flash-deal.scss']
})
export class FlashDealsComponents implements OnInit {
    flashDeals:any[] = [
        {
            location: 'Kathmandu, Nepal', 
            duration: '5 days', 
            startDate: '2023/03/10',
            tripName: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: '',
            status:'trending'
        },
        {
            location: 'Kathmandu, Nepal', 
            duration: '5 days', 
            startDate: '2023/02/29',
            tripName: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: '',
            status:'trending'
        },
        {
            location: 'Kathmandu, Nepal', 
            duration: '5 days', 
            startDate: '2023/02/15',
            tripName: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: '',
            status:'trending'
        },
        {
            location: 'Kathmandu, Nepal', 
            duration: '5 days', 
            startDate: '2023/04/01',
            tripName: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: '',
            status:'trending'
        },
        {
            location: 'Kathmandu, Nepal', 
            duration: '5 days', 
            startDate: '2023/04/01',
            tripName: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: '',
            status:'trending'
        },
        {
            location: 'Kathmandu, Nepal', 
            duration: '5 days', 
            startDate: '2023/04/01',
            tripName: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: '',
            status:'trending'
        },
        {
            location: 'Kathmandu, Nepal', 
            duration: '5 days', 
            startDate: '2023/04/01',
            tripName: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: '',
            status:'trending'
        },
        {
            location: 'Kathmandu, Nepal', 
            duration: '5 days', 
            startDate: '2023/04/01',
            tripName: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: '',
            status:'trending'
        }
    ]
    constructor() { }

    ngOnInit(): void { }

    discountCalculator(totalAmount, discount) {
        let actualDiscount = (totalAmount*discount)/100;
        return totalAmount-actualDiscount;
    }
}
