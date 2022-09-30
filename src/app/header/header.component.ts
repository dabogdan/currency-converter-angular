import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from '../services/exchange-rates.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  UAH = "UAH";
  rates!: { [key: string]: number };
  USDtoUAH = 0;
  EURtoUAH = 0;

  constructor(private service: ExchangeRatesService) { }

  loadRates() {
    this.service.getRates(this.UAH).subscribe(res => {
      this.rates = res.rates;
      this.USDtoUAH = 1/this.rates["USD"];
      this.EURtoUAH = 1/this.rates["EUR"];
    });
  }
  ngOnInit(): void {
    this.loadRates()
  }
}
