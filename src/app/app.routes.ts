import { Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { BestsellingproductsComponent } from './bestsellingproducts/bestsellingproducts.component';
import { FeaturedproductsComponent } from './featuredproducts/featuredproducts.component';
import { PopularproductsComponent } from './popularproducts/popularproducts.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path:'',component:DescriptionComponent},
    {path:'bestsellingproducts',component:BestsellingproductsComponent},
    {path:'featuredproducts',component:FeaturedproductsComponent},
    {path:'popularproducts',component:PopularproductsComponent},
    {path:'footer',component:FooterComponent}
];
