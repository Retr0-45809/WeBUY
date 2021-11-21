import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'login',
  component:LoginComponent,
  canActivate: [AuthGuardService],},
  {path:'registration',
  component:RegistrationComponent,
  canActivate: [AuthGuardService],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
