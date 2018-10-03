import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { appRoutes } from './routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { KnowComponent } from './know/know.component';
import { MvvComponent } from './mvv/mvv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TrimPipe } from './trim.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { WebsiteInfoService } from './website-info.service';
import { GenericPageComponent } from './generic-page/generic-page.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderEventService } from './loader-event.service';
import { EscapeHtmlPipePipe } from './escape-html-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    BannerComponent,
    KnowComponent,
    MvvComponent,
    PortfolioComponent,
    TrimPipe,
    ContactComponent,
    GenericPageComponent,
    LoaderComponent,
    EscapeHtmlPipePipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false }),
    HttpClientModule
  ],
  providers: [WebsiteInfoService,LoaderEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
