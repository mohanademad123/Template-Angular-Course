import { ProductsService } from './../../../Services/products.service';
import { Router } from '@angular/router';
import { StaticproductsService } from './../../../Services/staticproducts.service';
import { ICategory } from './../../../models/icategory';
import { Iproduct } from './../../../models/iproduct';
import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit, OnChanges {
  // catList:ICategory[];
  // prdList: Iproduct[];
  prdListofCat: Iproduct[] = [];
  slectedCategryID: number = 0;
  @Input() sentCatID: number = 0;
  @Input() ordertotalprice: number = 0;
  @Output() totalpriceChanged:EventEmitter<number>;
  orderDate: Date;
  constructor(
    // private staticprdservice:StaticproductsService,
    private prdservice:ProductsService ,
     private router:Router) {
    this.totalpriceChanged = new EventEmitter<number>();
    // this.catList = [
    //   {id:1, name:"labtop"},
    //   {id:2, name:"mobile"},
    //   {id:3, name:"tablet"}
    // ]
    // this.prdList = [
    //   { id: 100, name: 'LenovoThinkpad laptop', price: 100000000, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
    //   { id: 200, name: 'Apple MacBook laptop', price: 2007780, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 1 },
    //   { id: 300, name: 'Lenovo Tab 2', price: 3000, quantity: 10, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
    //   { id: 400, name: 'Samsung Tab', price: 40.5, quantity: 2, imgURL: 'https://fakeimg.pl/200x100', categoryID: 2 },
    //   { id: 500, name: 'Smasung Note 10', price: 50000, quantity: 0, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 },
    //   { id: 600, name: 'Samsung S22 Utlra', price: 600, quantity: 1, imgURL: 'https://fakeimg.pl/200x100', categoryID: 3 }
    // ];
    // this.prdListofCat = this.prdList;

    this.orderDate = new Date();
  }


  ngOnInit(): void {
    // this.prdListofCat = this.staticprdservice.getAllproducts();
    this.prdservice.getAllproducts().subscribe(
      products=>{ this.prdListofCat = products}
    );


  }
  buy(brdprice: number, count: string) {

    // let this.ordertotalprice:number= count;

    // this.ordertotalprice= parseInt(count)*brdprice;
    // this.ordertotalprice= Number(count)*brdprice;
    // this.ordertotalprice= (count as number)*brdprice;
    this.ordertotalprice += +count * brdprice;

    //Excute Event
    this.totalpriceChanged.emit(this.ordertotalprice);


  }
  changeCate() {
    this.slectedCategryID = 1;
  }
  prdTrackyByfn(index: number, prd: Iproduct): number {
    return prd.id;
  }
  // filterproductCatID(){
  //  this.prdListofCat = this.prdList.filter(prd=>prd.categoryID==this.slectedCategryID)
  // }
  // private filterproductCatID() {
  //   if (this.sentCatID == 0) {
  //     this.prdListofCat = this.prdList;

  //   }
  //   else
  //     this.prdListofCat = this.prdList.filter(prd => prd.categoryID == this.sentCatID);
  // }

  ngOnChanges(): void {
    // this.filterproductCatID();
    // this.prdListofCat = this.staticprdservice.getproductsByCatID(this.sentCatID);
    this.prdservice.getProductsByCatID(this.sentCatID).subscribe(
      product=>{this.prdListofCat = product},
      

    );
  }
  openprdDetails(prdID:number){
    // return this.router.navigateByUrl("/products/" + prdID);
   this.router.navigate(["/products" , prdID]);


  }
}
