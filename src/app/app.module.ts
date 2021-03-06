import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.routes';
import { AppComponent } from './app.component';
import { SponsoringPageComponent } from './pages/sponsoring/sponsoring-page.component';
import { AdoptionPageComponent } from './pages/adoption/adoption-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { SingleAnimalPageComponent } from './pages/single-animal/single-animal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtaApadrinheComponent } from './pages/home/components/cta-apadrinhe/cta-apadrinhe.component';
import { CtaAdoteComponent } from './pages/home/components/cta-adote/cta-adote.component';
import { CtaQuemSomosComponent } from './pages/home/components/cta-quem-somos/cta-quem-somos.component';
import { HttpClientModule } from '@angular/common/http';
import { CtaOutrasFormasComponent } from './pages/home/components/cta-outras-formas/cta-outras-formas.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './infra/store';
import { EffectsModule } from '@ngrx/effects';
import { LoadPagesEffects } from 'src/app/effects/load-pages/load-pages.effects';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';
import { MainPagesReducer } from 'src/app/infra/store/main-pages';
import { AnimalReducer } from 'src/app/infra/store/animal';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        SponsoringPageComponent,
        AdoptionPageComponent,
        AboutUsComponent,
        ContactPageComponent,
        SingleAnimalPageComponent,
        HeaderComponent,
        FooterComponent,
        CtaApadrinheComponent,
        CtaAdoteComponent,
        CtaQuemSomosComponent,
        CtaOutrasFormasComponent,
        AnimalsListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({ }, {
            metaReducers,
        }),
        StoreModule.forFeature(
            MainPagesReducer.mainPagesFeature,
        ),
        StoreModule.forFeature(
            AnimalReducer.animalsFeature,
        ),
        EffectsModule.forRoot([
            LoadPagesEffects,
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
