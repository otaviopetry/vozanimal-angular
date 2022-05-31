import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoteComponent } from 'src/app/pages/adote/adote.component';
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
        path: 'apadrinhe',
        component: ApadrinheComponent,
    },
    {
        path: 'adote',
        component: AdoteComponent,
    },
    {
        path: 'quem-somos',
        component: QuemSomosComponent,
    },
    {
        path: 'contato',
        component: ContatoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
