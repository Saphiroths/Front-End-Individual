import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './Items/items.component';
import { PublicPageComponent } from './public-page/public-page.component';

const routes: Routes = [{
  path: 'public-page', component: PublicPageComponent
}, {
  path: 'items', component: ItemsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
