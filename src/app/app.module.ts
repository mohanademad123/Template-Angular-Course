import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductlistComponent } from './components/Order/productlist/productlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxDirective } from './Directives/lightbox.directive';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { MinLayoutComponent } from './components/min-layout/min-layout.component';
import { ProductDetalisComponent } from './components/Order/product-detalis/product-detalis.component';
import{HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ProductlistComponent,
    LightboxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    NotFoundComponent,
    UserLoginComponent,
    MinLayoutComponent,
    ProductDetalisComponent,
    AddProductComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //to use to way data pinding
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
