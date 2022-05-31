import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from 'src/app/pages/home/home.component';

import { AppRoutingModule } from './app-routing.routes';
import { AppComponent } from './app.component';
import { ApadrinheComponent } from './pages/apadrinhe/apadrinhe.component';
import { AdoteComponent } from './pages/adote/adote.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtaApadrinheComponent } from './pages/home/components/cta-apadrinhe/cta-apadrinhe.component';
import { CtaAdoteComponent } from './pages/home/components/cta-adote/cta-adote.component';
import { CtaQuemSomosComponent } from './pages/home/components/cta-quem-somos/cta-quem-somos.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ApadrinheComponent,
        AdoteComponent,
        QuemSomosComponent,
        ContatoComponent,
        AnimalComponent,
        HeaderComponent,
        FooterComponent,
        CtaApadrinheComponent,
        CtaAdoteComponent,
        CtaQuemSomosComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
