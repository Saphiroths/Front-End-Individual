import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './Items/items.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { PublicPageComponent } from './public-page/public-page.component';
import { RegistrationComponent } from './Registration/registration.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MicrosoftLoginComponent } from './microsoft-login/microsoft-login.component';
import { HeaderComponent } from './header/header.component';
import { AdditemComponent } from './additem/additem.component';
import { ChatComponent } from './chat/chat.component';
import { UserItemsComponent } from './user-items/user-items.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '30229afc-d6b9-4b04-833c-a5bfe4177af1',
      redirectUri: 'http://localhost:4200'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    PublicPageComponent,
    RegistrationComponent,
    MicrosoftLoginComponent,
    HeaderComponent,
    AdditemComponent,
    ChatComponent,
    UserItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
