import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailCountryService } from './detail-country.service';
@Component({
  selector: 'app-detail-coutry',
  templateUrl: './detail-coutry.component.html',
  styleUrls: ['./detail-coutry.component.css']
})
export class DetailCoutryComponent implements OnInit {
  private nameCoutry = '';
  public dataDetailCountry: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private detailCountryService: DetailCountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      this.nameCoutry = params['name']
    )
    this.getDetailCoutry();

  }
  getDetailCoutry(): void {
    this.detailCountryService.getDetilCountry("https://restcountries.com/v2/name/" + this.nameCoutry).subscribe(res => {
      this.dataDetailCountry = res;
      console.log(res)
    })
  }

}
