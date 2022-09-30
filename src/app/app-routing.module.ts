import { ArcadeDetailComponent } from './arcade-detail/arcade-detail.component';
import { ArcadeComponent } from './arcade/arcade.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { 
    path: 'arcade', 
    component: ArcadeComponent,
    children: [
      { path: ':name', component: ArcadeDetailComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
