import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-detail.component.html',
  styleUrl: './dashboard-detail.component.css'
})
export class DashboardDetailComponent {

  @Output() newItem = new EventEmitter<string>()

  addNewItem(value: string): void {
    this.newItem.emit(value)
  }
}
