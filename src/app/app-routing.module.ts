import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses/addresses.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "teams", component: TeamsComponent},
  {path: "addresses", component: AddressesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
