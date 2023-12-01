import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {AddProductComponent} from "../form/add-product/add-product.component";
import {ProductListComponent} from "../list/product-list/product-list.component";
import {DashboardDetailComponent} from "../dashboard-detail/dashboard-detail.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AddProductComponent, ProductListComponent, DashboardDetailComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  title: string = "Dashboard"
  items: string[] = ['item1', "item2", "item3", "item4"]
  constructor(private router: Router) {
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
    window.location.reload()
  }

  addItemToParent(newValue: string): void {
    this.items.push(newValue)
  }
}
