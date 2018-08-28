import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const appRoutes =[
    { path: 'home', component: HomeComponent },
    { path: '',redirectTo: '/home',pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
]
