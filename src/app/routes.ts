import { HomeComponent } from './home/home.component';
import { GenericPageComponent } from './generic-page/generic-page.component'
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const appRoutes =[
    { path: 'home', component: HomeComponent },
    { path: 'pages/:pageId', component: GenericPageComponent },
    { path: 'projects/:projectId', component: GenericPageComponent },
    { path: '',redirectTo: '/home',pathMatch: 'full'},
    { path: '**', redirectTo: '/home' }
]
