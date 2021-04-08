import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { MyInfoComponent } from './shared/components/myinfo/myinfo.component';
import { ListpostsComponent } from './shared/components/listposts/listposts.component';
import { SelectedPostComponent } from './shared/components/selectedpost/selectedpost.component';
import { EditPostComponent } from './shared/components/editpost/editpost.component';
import { CreatePostComponent } from './shared/components/createpost/createpost.component';

import { ErrorComponent } from './shared/components/error/error.component';

import '../assets/css/styles';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
		AboutComponent,
		MyInfoComponent,
		ListpostsComponent,
		SelectedPostComponent,
		EditPostComponent,
		CreatePostComponent,
        ErrorComponent		
		
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
		HttpClientModule,
        ReactiveFormsModule		
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}