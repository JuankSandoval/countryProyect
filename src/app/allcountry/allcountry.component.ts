import { Component, OnInit } from '@angular/core';
import { AllcoutryService } from './allcoutry.service';
@Component({
  selector: 'app-allcountry',
  templateUrl: './allcountry.component.html',
  styleUrls: ['./allcountry.component.css']
})
export class AllcountryComponent implements OnInit {
  public dataCountry: any;
  public searchText: string = '';
  public selectedOrder: string = '';
  constructor(
    private allcoutryService: AllcoutryService) { }

  ngOnInit(): void {
    this.allcoutryService.getAllCountry("https://restcountries.com/v2/all").subscribe(res => {
      this.dataCountry = res;
       console.log(res)
    })
  }

}
