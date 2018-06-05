import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminsModule' }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
