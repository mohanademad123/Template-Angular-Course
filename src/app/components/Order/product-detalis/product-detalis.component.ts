import { Iproduct } from './../../../models/iproduct';
import { StaticproductsService } from './../../../Services/staticproducts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.scss']
})
export class ProductDetalisComponent implements OnInit {
  currprdID: number=0;
  prd:Iproduct | null =null;
  prdIDsArr: number[]=[];

  constructor(private activateRoute:ActivatedRoute,
    public prdservice:StaticproductsService ,
    private location:Location, private router:Router) { }

  ngOnInit(): void {

    // this.currprdID = Number(this.activateRoute.snapshot.paramMap.get('pid'));
    // console.log(this.currprdID)
  // this.prd = this.prdservice.getprdByID(this.currprdID);
  this.prdIDsArr = this.prdservice.getprdIDs();


  //when navigate to same component,angular WILL NOT reload component
    //even if there's changs in the route parameters.

    this.activateRoute.paramMap.subscribe((paramMap)=>{
      this.currprdID = Number(paramMap.get('pid'));
      this.prd = this.prdservice.getprdByID(this.currprdID);
    })
  }

  GOBack(){
    this.location.back();

  }

  prevprd(){
    let currIndex=this.prdIDsArr.findIndex((ele,index)=>ele ==this.currprdID);
    // console.log(currIndex);
if(currIndex > 0){
  let prevprdID = this.prdIDsArr[currIndex - 1];
  this.router.navigate(['/products',prevprdID]);
};
  }

  nextprd(){
    let currIndex=this.prdIDsArr.findIndex((ele,index)=>ele ==this.currprdID);
    // console.log(currIndex);
if(currIndex < this.prdIDsArr.length){
  let nextprdID = this.prdIDsArr[currIndex + 1];
  this.router.navigate(['/products',nextprdID]);
};

  }
}
