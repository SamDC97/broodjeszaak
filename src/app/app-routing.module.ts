import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BroodComponent } from './brood/brood.component';
import { BelegComponent } from './beleg/beleg.component';
import { SausComponent } from './saus/saus.component';

const routes: Routes = [
  { path: 'brood', component: BroodComponent},
  { path: 'beleg', component: BelegComponent},
  { path: 'saus', component: SausComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [BroodComponent, BelegComponent]
