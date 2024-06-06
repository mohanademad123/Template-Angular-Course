import { ICategory } from 'src/app/models/icategory';
import { ProductsService } from './../../Services/products.service';
import { Iproduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  catList:ICategory[];
  newPrd: Iproduct={} as Iproduct;
  constructor(private prdService: ProductsService,private router: Router) {
    this.catList=[
      {id:1, name:'Laptops'},
      {id:2, name:'Tablets'},
      {id:3, name:'Mobiles'}
    ];
  }

  ngOnInit(): void {}
  AddProduct() {
    // const prd: Iproduct = {
    //   id: 1,
    //   name: 'New Tablet',
    //   price: 100,
    //   quantity: 10,
    //   categoryID: 2,
    //   imgURL: '',
    // }
    // this.prdService.addProduct(prd).subscribe((prd) => {
    //   alert("Product added Successfuly"); // not recommended
    //   // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
    //   this.router.navigateByUrl('/products');
    // })
    const observer={
      next: (prd:Iproduct) => {
        alert("Product added Successfuly"); // not recommended
        // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
        this.router.navigateByUrl('/Products');
      },
      error: (err:Error)=>{alert(err.message)}
    }

    this.prdService.addProduct(this.newPrd).subscribe(observer);
  }

}
