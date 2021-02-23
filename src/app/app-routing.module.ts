import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';

import { AboutComponent } from './shared/components/about/about.component';

import { MyInfoComponent } from './shared/components/myinfo/myinfo.component';


import { ListpostsComponent } from './shared/components/listposts/listposts.component';

import { ErrorComponent } from './shared/components/error/error.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'myinfo', component: MyInfoComponent },
	{ path: 'listposts', component: ListpostsComponent },
	
	{ path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule' },
	{ path: 'error', component: ErrorComponent },
		
    // otherwise redirect to home
    { path: '**', redirectTo: 'error' }
		
	
];

// Note: To avoid status code 404 on refresh menu page the following - none seo friendly - code have been used below:  { useHash: true }
// { useHash: true } is only for developement - in production using rules in .htaccess !
//RouterModule.forRoot(appRoutes, { useHash: true })

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}