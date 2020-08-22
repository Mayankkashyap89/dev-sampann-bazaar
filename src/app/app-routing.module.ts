import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OffersComponent } from './components/offers/offers.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { MemberComponent } from './components/member/member.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: "member", component: MemberComponent
  },
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "offers", component: OffersComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "contact", component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
