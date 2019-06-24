import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomComponent } from './custom.component';

const routes: Routes = [
  {
    path: "", component: CustomComponent,
    children: [
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
