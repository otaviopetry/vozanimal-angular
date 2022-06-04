import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteData } from 'src/app/domain/site-data';
import { AdoteComponent } from 'src/app/pages/adote/adote.component';
import { AnimalsComponent } from 'src/app/pages/animals/animals.component';
import { ApadrinheComponent } from 'src/app/pages/apadrinhe/apadrinhe.component';
import { ContatoComponent } from 'src/app/pages/contato/contato.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { QuemSomosComponent } from 'src/app/pages/quem-somos/quem-somos.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: SiteData.SLUG_APADRINHE,
        component: ApadrinheComponent,
    },
    {
        path: SiteData.SLUG_ADOTE,
        component: AdoteComponent,
    },
    {
        path: SiteData.SLUG_QUEM_SOMOS,
        component: QuemSomosComponent,
    },
    {
        path: SiteData.SLUG_CONTATO,
        component: ContatoComponent,
    },
    {
        path: SiteData.SLUG_ANIMAIS,
        component: AnimalsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
