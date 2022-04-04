import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
    PageOneComponent,
    PageTwoComponent,
    SitemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
