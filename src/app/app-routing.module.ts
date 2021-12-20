import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './Items/items.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { UserItemsComponent } from './user-items/user-items.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [{
  path: 'public-page', component: PublicPageComponent
}, {
  path: 'items', component: ItemsComponent
}, {
  path: 'owned', component: UserItemsComponent
}, {
  path: 'chat', component: ChatComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
