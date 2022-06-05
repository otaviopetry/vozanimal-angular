import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteData } from 'src/app/domain/site-data';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { SponsoringPageComponent } from 'src/app/pages/sponsoring/sponsoring-page.component';
import { ContactPageComponent } from 'src/app/pages/contact/contact-page.component';
import { AdoptionPageComponent } from 'src/app/pages/adoption/adoption-page.component';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';
import { SingleAnimalPageComponent } from 'src/app/pages/single-animal/single-animal.component';
import { SingleAnimalRouteResolver } from 'src/app/resolvers/single-animal-page.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
    },
    {
        path: SiteData.SLUG_APADRINHE,
        component: SponsoringPageComponent,
    },
    {
        path: SiteData.SLUG_ADOTE,
        component: AdoptionPageComponent,
    },
    {
        path: SiteData.SLUG_QUEM_SOMOS,
        component: AboutUsComponent,
    },
    {
        path: SiteData.SLUG_CONTATO,
        component: ContactPageComponent,
    },
    {
        path: SiteData.SLUG_ANIMAIS,
        children: [
            {
                path: ':animal',
                component: SingleAnimalPageComponent,
                resolve: {
                    animal: SingleAnimalRouteResolver,
                }
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
