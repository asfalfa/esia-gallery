import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionSingleComponent } from './components/collection/collection-single/collection-single.component';
import { ExhibitionsComponent } from './components/exhibitions/exhibitions.component';
import { ExhibitionSingleComponent } from './components/exhibitions/exhibition-single/exhibition-single.component';
import { ArtistSingleComponent } from './components/artists/artist-single/artist-single.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ArtworkSingleComponent } from './components/artworks/artwork-single/artwork-single.component';
import { PaymentFormComponent } from './components/checkout/payment-form/payment-form.component';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import { ArtworksComponent } from './components/artworks/artworks.component';

const routes: Routes = [
    {
        path: '',
        component: ArtworksComponent,
    },
    {
        path: 'artworks/:id',
        component: ArtworkSingleComponent,
    },
    {
        path: 'collections',
        component: CollectionComponent,
    },
    {
        path: 'collections/:id',
        component: CollectionSingleComponent
    },
    {
        path: 'artists',
        component: ArtistsComponent,
    },
    {
        path: 'artists/:id',
        component: ArtistSingleComponent,
    },
    {
        path: 'exhibitions',
        component: ExhibitionsComponent,
    },
    {
        path: 'exhibitions/:id',
        component: ExhibitionSingleComponent,
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
    },
    {
        path: 'checkout/address',
        component: AddressFormComponent,
    },
    {
        path: 'checkout/payment',
        component: PaymentFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
