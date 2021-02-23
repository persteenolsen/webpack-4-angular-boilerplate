import { Component } from '@angular/core';

@Component({
    selector: 'listposts-page',
    templateUrl: './listposts.component.html',
    styleUrls: ['./listposts.component.scss']
})


export class ListpostsComponent {

    users = [
        { firstName: 'Per', lastName: 'Olsen', email: 'per.olsen@test.com', role: 'Admin' },
        { firstName: 'Ole', lastName: 'Jensen', email: 'ole.jensen@test.com', role: 'User' },
        { firstName: 'Peter', lastName: 'Hansen', email: 'peter.hansen@test.com', role: 'User' },
        { firstName: 'Hans', lastName: 'Larsen', email: 'hans.larsen@test.com', role: 'User' },
        { firstName: 'Ib', lastName: 'Ibsen', email: 'ib.ibsen@test.com', role: 'User' }
    ];
}
