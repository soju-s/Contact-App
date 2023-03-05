import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {


  //variable for data biding 

  searchKey: any = ''

  //to hold all contacts data from api (to do string interpolation we need class properties so create a variable )

  allCOntact: any = []

  constructor(private api: ApiService, private allContactROuter: Router) {

  }
  ngOnInit(): void {
    this.getAllCOntact()

  }
// to get all contacts
  getAllCOntact() {
    this.api.allContacts()
      .subscribe((result: any) => {
        console.log(result);

        //class property allcontact 
        this.allCOntact = result


      })
  }
  // to delete contact

  deleteContact(contactId: any) {
    this.api.deleteContact(contactId).subscribe((data) => {
      //function call so that when deleting no reloading of page is done
    this.getAllCOntact()

    })


  }

}
