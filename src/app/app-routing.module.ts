import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './Items/items.component';
import { NarutoPageComponent } from './naruto-page/naruto-page.component';
import { PublicPageComponent } from './public-page/public-page.component';

const routes: Routes = [{
  path: 'public-page', component: PublicPageComponent
}, {
  path: 'items', component: ItemsComponent
}, {
  path: 'naruto', component: NarutoPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
