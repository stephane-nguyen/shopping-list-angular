import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', //identifies the component, by convention: app-<component name>
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // handle functionality for the component

  //The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  //pass data to a child component
  @Input() product: Product | undefined; //define the property product
  //pass data to a parent component
  @Output() notify = new EventEmitter(); //define the property notify

  constructor() {}
}
