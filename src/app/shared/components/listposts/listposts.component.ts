//import 'whatwg-fetch';

import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'listposts-page',
    templateUrl: './listposts.component.html',
    styleUrls: ['./listposts.component.scss']
})

export class ListpostsComponent implements OnInit {

    totalAngularPackages: any;
	listOfPosts: any;
	errorMessage: any;
	
    constructor(private http: HttpClient) { }

    ngOnInit() {  
	    
		// Get Request for the total number of Angular packages at api.nmps.io
        this.http.get<SearchResults>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
        this.totalAngularPackages = data.total;
        })
	  
	    
		// Get Request for a list of posts at jsonplaceholder
		// Note: Without Error handling !
	    //this.http.get<NewSearchResults>('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10').subscribe(data => {
        //this.listOfPosts = data;
        //})
	    
		// Get Request for a list of posts at jsonplaceholder
		// Note: With Error handling: If there is an error like wrong url - an error message will be displayed
	    this.http.get<NewSearchResults>('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10').subscribe({
		   
		    next: data => {
                this.listOfPosts = data;
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
       })
	   
    }
}

// The interface matching the result from api.nmps.io Web API
interface SearchResults {
    total: number;
    results: Array<object>;
}

// The interface matching the result from jsonplaceholder Web API
interface NewSearchResults {
    userId: any;
	id: any;
    title: any;
	body: any;
 
}