import { Component } from '@angular/core';

// Note: Maybe not nessesary for using require to load the image !!
declare const require: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    name = 'Webpack 4 and Angular 7 !';
			
	// Note: This does not work !!
	//imageSrc = '../assets/images/logopersteenolsen.jpg'; 
	
    // The following "tricks" is Webpack and not Angular cli !	
    // Note: Without using "esModule: false" in webpack.common.js an image [src] will need require + .default suffix to load !
	// - esModule was introduced in file-loader 4.3 and from 5.0 set to true by default 
	// imageSrc = require('../assets/images/logopersteenolsen.jpg').default;
		
	// Note: Using "esModule: false" in webpack.common.js an image [src] will load just by require 
	//(in the ts component) or without require ( component html-template) !
	// - esModule was introduced in file-loader 4.3 and from 5.0 set to true by default 
	imageSrc = require('../assets/images/logopersteenolsen.jpg');
	
	imageAlt = 'Per Steen Olsen';
	
}