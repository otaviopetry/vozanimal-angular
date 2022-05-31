import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from 'src/app/pages/home/home.component';

import { AppRoutingModule } from './app-routing.routes';
import { AppComponent } from './app.component';
import { ApadrinheComponent } from './pages/apadrinhe/apadrinhe.component';
import { AdoteComponent } from './pages/adote/adote.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ApadrinheComponent,
        AdoteComponent,
        QuemSomosComponent,
        ContatoComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
