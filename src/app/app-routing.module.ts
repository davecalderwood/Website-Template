import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'page-one', component: PageOneComponent, data: {title: 'Website Template | Page One'}},
  {path: 'page-two', component: PageTwoComponent, data: {title: 'Website Template | Page Two'}},
  {path: 'sitemap', component: SitemapComponent, data: {title: 'Website Template | Sitemap'}},
  {path: 'settings', component: SettingsComponent, data: {title: 'Website Template | Settings'}},
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Website Template | Dashboard'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
