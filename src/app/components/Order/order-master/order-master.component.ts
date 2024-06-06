import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {
[x: string]: any;
  catList:ICategory[];
  slectedCategryID:number=0;
  resevOrdrertotalpric:number=0;
  @ViewChild("clinetNameInp") form:string="";

  //how to save problem initial value

  // clinetNameInpElement:ElementRef = {} as ElementRef;
  // clinetNameInpElement?:ElementRef; //optional
  // clinetNameInpElement:ElementRef | undefined = undefined;
  // clinetNameInpElement:ElementRef | null = null;
  // clinetNameInpElemen!:ElementRef; //Non-null asseration operator

  @ViewChild('clinetNameInp') clinetNameInpElemen!: ElementRef; 
  @ViewChild(ProductlistComponent) prdlistComponent!: ProductlistComponent;




  constructor() {
    this.catList = [
      {id:1, name:"labtop"},
      {id:2, name:"mobile"},
      {id:3, name:"tablet"},
      {id:0, name:"All"},

    ]
   }

  ngOnInit(): void {
  }

   ngAfterViewInit(): void {
    this.clinetNameInpElemen.nativeElement.value = "Your Name here";
    this.clinetNameInpElemen.nativeElement.style.border="2px solid red";

    // ProductlistComponent
    // console.log(this.prdlistComponent.prdList)

  }

  ontotalpricechange(totalprice:number){
   this.resevOrdrertotalpric = totalprice;

  }
  completeOreder(){
    // for test
    // this.prdlistComponent.prdList[0].quantity-=1;

  }
  forms(net:string){
    this.form = net;

  }
}
