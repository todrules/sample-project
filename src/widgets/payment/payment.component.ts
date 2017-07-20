import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, RequestOptions, Headers } from '@angular/http';

export interface Font {
  family?: string | object;
  src?: string;
  style?: string;
  unicodeRange?: string;
  weight?: string | number;
}
export interface ElementOptions {
  fonts?: [Font];
  locale?: string;
}

export interface TokenOptions {
  name?: string;
  address_line1?: string;
  address_line2?: string;
  address_city?: string;
  address_state?: string;
  address_zip?: string;
  address_country?: string;
  currency?: any;
}

export interface Card {
  id: string;
  object: string;
  address_city: string;
  address_country: string;
  address_line1: string;
  address_line1_check: string;
  address_line2: string;
  address_state: string;
  address_zip: string;
  address_zip_check: string;
  brand: string;
  country: string;
  cvc_check: string;
  dynamic_last4: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  last4: string;
  metadata: object;
  name: string;
  tokenization_method: string;
}
export interface Token {
  id?: string;
  object?: string;
  bank_account?: object;
  card?: Card;
  client_ip?: string;
  created?: Date;
  livemode?: boolean;
  type?: string;
  used?: boolean;
}
export interface Result {
  token?: Token;
  error?: Error;
}
export interface Stripe {
  elements(options?: ElementOptions): Elements;
  createToken(element: Elements, options: TokenOptions[]): Promise<Result>;
  (secret: string): void;
}

declare const Stripe: Stripe;

export interface Types {
  card: any;
  cardNumber?: any;
  cardExpiry?: any;
  cardCvc?: any;
  postalCode?: any;
}

export interface CreateOptions {
  classes?: any;
  hidePostalCode?: boolean;
  hideIcon?: boolean;
  iconStyle?: string;
  style?: object;
  value?: any;
}

export interface Elements {
  create(type: Types, options?: CreateOptions[]);
  mount(domElement);
  on(event: Event, handler);
  blur();
  clear();
  focus();
  unmount();
  update(options?: CreateOptions[]);
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.template.html'
})
export class PaymentComponent implements OnInit {
  private cardToken: any;
  public title = 'Make a Payment';
  public stripe: any;
  public elements: any;
  public card: any;
  public formCard = {
    number: null,
    exp_month: null,
    exp_year: null,
    cvc: null
  };
  public http: Http;
  public diag;
  public diag2;
  constructor(private _http: Http) {
    this.http = _http;
  }

  ngOnInit () {


  }

  makePayment() {

  }

  createToken() {
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer pk_test_HYN4uPqYEk3NruqHTj6jemDw'
     });
    const options = new RequestOptions({ headers: headers });
    const expire = this.formCard.exp_month.split(' / ');
    this.formCard.exp_month = expire[0];
    this.formCard.exp_year = expire[1];
    const cc = this.formCard.number.split(' ');
    this.formCard.number = cc[0].concat(cc[1]).concat(cc[2]).concat(cc[3]);
    this.diag2 = JSON.stringify(this.formCard);
    const path = 'card[number]=' + this.formCard.number + '&card[cvc]=' + this.formCard.cvc + '&card[exp_month]=' + this.formCard.exp_month + '&card[exp_year]=' + this.formCard.exp_year + '&key=pk_test_HYN4uPqYEk3NruqHTj6jemDw';
    return this.http.post('https://api.stripe.com/v1/tokens?' + path, null, options).subscribe((res) => {
      const body = res.json();
      this.diag = JSON.stringify(body);
      console.log(body);
    });
  }

}
