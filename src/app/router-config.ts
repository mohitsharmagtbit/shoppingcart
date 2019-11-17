
import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path:'cart',
        component: CartComponent
    }

];
export default appRoutes;
