import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule' }
];

// Note: To avoid status code 404 on refresh menu page the following - none seo friendly - code have been used below:  { useHash: true }
// { useHash: true } is only for developement - in production using rules in .htaccess !
// RouterModule.forRoot(appRoutes, { useHash: true })

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}