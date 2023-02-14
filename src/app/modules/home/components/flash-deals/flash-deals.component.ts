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
            thumbnail: 'assets/img/flash-deals-kathmandu.jpg',
            status:'trending'
        },
        {
            location: 'Trishuli, Nepal', 
            duration: '1 day', 
            startDate: '2023/04/05',
            tripName: 'Trishuli River Rafting In Kathmandu Includes',
            actualPrice: 4200, 
            discount: 5,
            thumbnail: 'assets/img/flash-deals-trishuli.jpg',
            status:'trending'
        },
        {
            location: 'Pokhara, Nepal', 
            duration: '5 days', 
            startDate: '2023/05/15',
            tripName: 'Paragliding With Zip Flyer In Nepal Includes',
            actualPrice: 12000, 
            discount: 10,
            thumbnail: 'assets/img/flash-deals-para.jpg',
            status:'trending'
        },
        {
            location: 'Nepal, Bhutan', 
            duration: '8 days', 
            startDate: '2023/03/01',
            tripName: 'Nepal Bhutan Tour Package',
            actualPrice: 100000, 
            discount: 12,
            thumbnail: 'assets/img/flash-deals-nep.jpg',
            status:'trending'
        },
        {
            location: '3000 ft. above Pokhara, Nepal', 
            duration: '8 days', 
            startDate: '2023/04/01',
            tripName: 'Bindyabasini Temple Tours & Activities',
            actualPrice: 2500, 
            discount: 15,
            thumbnail: 'assets/img/flash-deals-pokh.jpg',
            status:'trending'
        },
        {
            location: 'Kushma, Nepal', 
            duration: '5 days', 
            startDate: '2023/04/01',
            tripName: 'Bungee Jumping in Nepal',
            actualPrice: 10000, 
            discount: 15,
            thumbnail: 'assets/img/flash-deals-bunjee.jpg',
            status:'trending'
        },
        {
            location: 'Pokhara, Nepal', 
            duration: '3 days', 
            startDate: '2023/04/01',
            tripName: 'Mountain Biking In Pokhara Includes',
            actualPrice: 3000, 
            discount: 15,
            thumbnail: 'assets/img/flash-deals-bindi.jpg',
            status:'trending'
        },
        {
            location: 'Pokhara, Nepal', 
            duration: '5 days', 
            startDate: '2023/04/01',
            tripName: 'Microlight Flying Over Himalayas Includes',
            actualPrice: 35000, 
            discount: 15,
            thumbnail: 'assets/img/cinnamon.png',
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
