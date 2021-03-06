import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers, appEffects } from './store/app.state';


/* Components */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { BannerComponent } from './components/banner/banner.component';
import { PreviousRulingComponent } from './components/previous-ruling/previous-ruling.component';
import { CommentsComponent } from './components/comments/comments.component';

/* Pipes */
import { CalculatePercentagePipe } from './pipes/calculate-percentage.pipe';
import { MainComponent } from './components/main/main.component';
import { PastTrialsComponent } from './components/past-trials/past-trials.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    BannerComponent,
    PreviousRulingComponent,
    CommentsComponent,
    CalculatePercentagePipe,
    MainComponent,
    PastTrialsComponent,
    HowItWorksComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
