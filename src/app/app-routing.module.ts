import { TransactionComponent } from './components/transaction/transaction.component';
import { Transaction } from 'src/app/models/Transaction';
import { ArcadeDetailComponent } from './components/arcade-detail/arcade-detail.component';
import { ArcadeComponent } from './components/arcade/arcade.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'arcade', component: ArcadeComponent },
   { path: 'arcade/:id', component: ArcadeDetailComponent},
   { path: 'transactions', component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
