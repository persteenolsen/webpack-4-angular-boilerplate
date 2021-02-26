import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';

import { AboutComponent } from './shared/components/about/about.component';

import { MyInfoComponent } from './shared/components/myinfo/myinfo.component';

import { ListpostsComponent } from './shared/components/listposts/listposts.component';

import { ErrorComponent } from './shared/components/error/error.component';


import '../assets/css/styles';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
		AboutComponent,
		MyInfoComponent,
		ListpostsComponent,
        ErrorComponent		
		
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
		HttpClientModule 
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}