
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
	
    constructor(private http: HttpClient) { }

    ngOnInit() {  
	    
		// Requesting a total number of Angular packages at api.nmps.io
        this.http.get<SearchResults>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
        this.totalAngularPackages = data.total;
        })
	  
	    // Requesting a list of posts at jsonplaceholder
	    this.http.get<NewSearchResults>('https://jsonplaceholder.typicode.com/posts??_start=0&_limit=10').subscribe(data => {
        this.listOfPosts = data;
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