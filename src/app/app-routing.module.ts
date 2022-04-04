import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {path: 'page-one', component: PageOneComponent, data: {title: 'Website Template | Page One'}},
  {path: 'page-two', component: PageTwoComponent, data: {title: 'Website Template | Page Two'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
