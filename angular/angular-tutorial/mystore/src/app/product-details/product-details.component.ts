import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product: Product | undefined;
  
  constructor(private route: ActivatedRoute, private cartService: CartService) {}
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  
  ngOnInit() {
    // Abrufen der Produkt-ID aus der aktuellen Route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Suche das Produkt, das der in Route angegebenen ID entspricht.
    this.product = products.find(product => product.id === productIdFromRoute);
    console.log(routeParams)
    console.log(productIdFromRoute)
  }
}