import { PromotionAdsService } from './../../Services/promotion-ads.service';
import { StoreData } from './../../VIeomodels/store-data';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, filter, first, map, retry, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit , OnDestroy {
  private Adsubscription!:Subscription;
  private subscription:Subscription[]=[];
  storeInfo: StoreData;
  isImageShown: boolean = true;

  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData('mohanad', '../../../assets/m-2.jpg', [
      'cairo',
      'giza',
      'alex',
    ]);
  }

  ngOnInit(): void {
    //======>>1
    //  let observer={
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   }error: (err:string)=>{
    //     console.log(err);
    //   },
    //   complete:()=>{
    //    console.log("Ads Finsihed!");
    // };
    //  this.promoAds.getScheduledAds(3).subscribe(observer);
    //===============>>2

    // this.subscription = ....
    // let subscription :Subscription =.......
  //  this.Adsubscription = this.promoAds.getScheduledAds(3).subscribe({
  //       next: (data: string) => {
  //         console.log(data);
  //       },
  //       error: (err: string) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //         console.log('Ads Finsihed!');
  //       },
  //     });

  //     this.subscription.push(this.Adsubscription);

    // adsubscription.unsubscribe(); //Asencruns

    //=============>>3
    // this.promoAds.getScheduledAds(3).subscribe(
    //   (data)=>{},
    //   (err)=>{},
    //   ()=>{}
    //   );
    //===============>anew wayes[4]

    // let subs= this.promoAds.getSerialAds().subscribe(ad=>{
    //   console.log(ad);
    // });
    // this.subscription.push(subs);

        //============.>anew wayes[5]
         let observer={
      next:(data:string)=>{
        console.log(data);
      },
      error: (err:string)=>{
        console.log(err);
      },
      complete:()=>{
       console.log("Ads Finsihed!");

      }

    };
        let FilterObservable = this.promoAds.getScheduledAds(3).pipe(
          filter(ad=>ad.includes("white Friday")),
          map(ad=>"Ad: " + ad),
          // retry(3),
          // catchError()
        );
       let adsSubscription = FilterObservable.subscribe(observer);
        this.subscription.push(adsSubscription);
  }




  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    for(let sub of this.subscription){
      sub.unsubscribe();
    }

  }

  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }
}
