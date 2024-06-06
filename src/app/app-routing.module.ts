import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { ProductDetalisComponent } from './components/Order/product-detalis/product-detalis.component';
import { MinLayoutComponent } from './components/min-layout/min-layout.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { ProductlistComponent } from './components/Order/productlist/productlist.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //first-match wins strategy


  {path:'',component:MinLayoutComponent,children:[
  {path:'', redirectTo:'/home',pathMatch: 'full'}, //default path
  {path:'home', component:HomeComponent },
  {path:'products', component:ProductlistComponent },
  {path:'products/:pid', component:ProductDetalisComponent},
  {path:'product/Add', component:AddProductComponent },

  {path:'Order', component:OrderMasterComponent,canActivate:[AuthGuard] },
  {path:'User', loadChildren: ()=> import('src/app/components/user-module/user-module.module').then(m =>m.UserModuleModule)
}
  ]},

  {path:'Login', component:UserLoginComponent},
  {path:'Logout', component:UserLoginComponent},
  {path:'Register', component:UserRegisterComponent},

  {path:'**', component:NotFoundComponent} //wild card path


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
