import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { NavComponent } from './widgets/nav/nav.component';
import { CapitalizePipe } from 'src/utils/capitalize.pipe';
import { ContentService } from './services/content.service';
import { AspectsService } from './services/aspects.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    NavComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ContentService, AspectsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
