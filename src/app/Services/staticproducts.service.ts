import { Iproduct } from './../models/iproduct';
//we create this components to implement all bisness logic poducts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //shared instance all above ablication
})
export class StaticproductsService {
  private prdlist:Iproduct[];
  constructor() {
     this.prdlist = [
      { id: 100, name: 'LenovoThinkpad laptop', price: 100000000, quantity: 1, imgURL: '../../../assets/m-2.jpg', categoryID: 1 },
      { id: 200, name: 'Apple MacBook laptop', price: 2007780, quantity: 0, imgURL: '../../../assets/m-2.jpg', categoryID: 1 },
      { id: 300, name: 'Lenovo Tab 2', price: 3000, quantity: 10, imgURL: '../../../assets/m-2.jpg', categoryID: 2 },
      { id: 400, name: 'Samsung Tab', price: 40.5, quantity: 2, imgURL: '../../../assets/m-2.jpg', categoryID: 2 },
      { id: 500, name: 'Smasung Note 10', price: 50000, quantity: 0, imgURL: '../../../assets/m-2.jpg', categoryID: 3 },
      { id: 600, name: 'Samsung S22 Utlra', price: 600, quantity: 1, imgURL: '../../../assets/m-2.jpg', categoryID: 3 }
    ];
   }
   getAllproducts():Iproduct[]{
    return this.prdlist;


   }
   getproductsByCatID(cID:number):Iproduct[]{
    if (cID== 0) {
      return this.prdlist;

    }
    else
     return this.prdlist.filter(prd => prd.categoryID == cID);

   }
   getprdByID(PID:number):Iproduct | null{

    let foundproduct =  this.prdlist.find(prd=>prd.id==PID);
    return foundproduct?foundproduct: null;


   }
   addNewproduct(prd:Iproduct){
    this.prdlist.push(prd);

   }
getprdIDs():number[]{
 let prdIDs:number[] = this.prdlist.map(prd=> prd.id);
 return prdIDs

}
}

