import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from "../../interface/product";
import {Observable} from "rxjs";
import {AppService} from "../../service/app.service";
import {DemoPipe} from "../../pipes/demo.pipe";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, DemoPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products?: Observable<Product[]>

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.products = this.appService.products.asObservable()
  }


}
