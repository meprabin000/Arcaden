import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArcadeComponent } from './components/arcade/arcade.component';
import { ArcadeDetailComponent } from './components/arcade-detail/arcade-detail.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TransactionComponent } from './components/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArcadeComponent,
    ArcadeDetailComponent,
    TopbarComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
