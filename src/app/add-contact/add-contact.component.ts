import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { myContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {


  //variable to hold new contact details

  contact:myContact={}


  //variable to hold data of all groups

  groups:any=[]


  constructor(private api: ApiService,private addContactRouter:Router) {

    this.contact.groupId='Select a Group'

  }
  ngOnInit(): void {
    this.api.allGroups().subscribe((data: any) => {
      console.log(data);
      this.groups=data

    })
  }

  //function to save addcontact datas to server

  addContact(contact:any){
    this.api.addContact(contact).subscribe((data:any)=>{
      alert('New contacts added sucessfully')
      //redirect to all contact page
      this.addContactRouter.navigateByUrl('')
      
    })

  }

}
