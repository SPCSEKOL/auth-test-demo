import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AppService} from "../../service/app.service";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm: FormGroup

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.productForm = this.fb.group({
      id: ["", Validators.required],
      title: ["", Validators.required],
      price: [],
      inStock: [],
    })
  }

  addProduct(): void {
    if (this.productForm.valid) {
      this.appService.addProduct(this.productForm.value)
    }
  }
}
