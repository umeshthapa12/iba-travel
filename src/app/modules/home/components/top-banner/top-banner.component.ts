import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'top-banner',
    templateUrl: './top-banner.component.html',
    styleUrls: ['./top-banner.scss']
})
export class TopBannerComponent implements OnInit {
  /** list of bank groups */
  protected bankGroups: any[] = [
    {
      name: 'Nepal',
      banks: [
        {name: 'Kathmandu Sightseeing Tour For 4 Days and 3 Nights', id: 'kat'},
        {name: 'Sarangkot Sunrise View Tour Includes', id: 'pok'},
        {name: 'Pokhara Thulakot Hill Day Hike Includes', id: 'pok1'},
        {name: 'Dhulikhel-zip-line-experience-near-kathmandu', id: 'dhu'},
        {name: 'Nagarkot', id: 'nag'},
      ]
    },
    {
      name: 'France',
      banks: [
        {name: 'Bank C', id: 'C'},
        {name: 'Bank D', id: 'D'},
        {name: 'Bank E', id: 'E'},
      ]
    },
    {
      name: 'Italy',
      banks: [
        {name: 'Bank F', id: 'F'},
        {name: 'Bank G', id: 'G'},
        {name: 'Bank H', id: 'H'},
        {name: 'Bank I', id: 'I'},
        {name: 'Bank J', id: 'J'},
      ]
    },
    {
      name: 'United States of America',
      banks: [
        {name: 'Bank Kolombia', id: 'K'},
      ]
    },
    {
      name: 'Germany',
      banks: [
        {name: 'Bank L', id: 'L'},
        {name: 'Bank M', id: 'M'},
        {name: 'Bank N', id: 'N'},
        {name: 'Bank O', id: 'O'},
        {name: 'Bank P', id: 'P'},
        {name: 'Bank Q', id: 'Q'},
        {name: 'Bank R', id: 'R'}
      ]
    }
  ];

  /** control for the selected bank for option groups */
  public bankGroupsCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword for option groups */
  public bankGroupsFilterCtrl: FormControl = new FormControl();

  /** list of bank groups filtered by search keyword for option groups */
  public filteredBankGroups: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  ngOnInit() {
    // load the initial bank list
    this.filteredBankGroups.next(this.copyBankGroups(this.bankGroups));

    // listen for search field value changes
    this.bankGroupsFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBankGroups();
      });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }


  protected filterBankGroups() {
    if (!this.bankGroups) {
      return;
    }
    // get the search keyword
    let search = this.bankGroupsFilterCtrl.value;
    const bankGroupsCopy = this.copyBankGroups(this.bankGroups);
    if (!search) {
      this.filteredBankGroups.next(bankGroupsCopy);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBankGroups.next(
      bankGroupsCopy.filter((bankGroup:any) => {
        const showBankGroup = bankGroup.name.toLowerCase().indexOf(search) > -1;
        if (!showBankGroup) {
          bankGroup.banks = bankGroup.banks.filter((bank:any) => bank.name.toLowerCase().indexOf(search) > -1);
        }
        return bankGroup.banks.length > 0;
      })
    );
  }

  protected copyBankGroups(bankGroups: any[]) {
    const bankGroupsCopy:any = [];
    bankGroups.forEach(bankGroup => {
      bankGroupsCopy.push({
        name: bankGroup.name,
        banks: bankGroup.banks.slice()
      });
    });
    return bankGroupsCopy;
  }
}
