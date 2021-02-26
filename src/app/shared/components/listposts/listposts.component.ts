
import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'listposts-page',
    templateUrl: './listposts.component.html',
    styleUrls: ['./listposts.component.scss']
})

export class ListpostsComponent implements OnInit {
    totalAngularPackages: any;
	
    constructor(private http: HttpClient) { }

    ngOnInit() {          
        this.http.get<SearchResults>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
            this.totalAngularPackages = data.total;
        })
	  
	  // TEST !
	  //  this.http.get<NewSearchResults>('https://jsonplaceholder.typicode.com/posts??_start=0&_limit=1').subscribe(data => {
      //      this.totalAngularPackages = data.userId;
      //  })
    }
}

interface SearchResults {
    total: number;
    results: Array<object>;
}

 // TEST !
interface NewSearchResults {
    userId: Array<object>;
   // title: string;
    
}