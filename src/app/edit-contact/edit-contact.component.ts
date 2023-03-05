import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{


  //variable to hold group data

  groupDetails:any=[]


  //variable to hold contact id form url

  contactId:string=''

  //variable to hold a particular contact details 

  contactDetails:myContact={}


  constructor(private editContactActivatedRoute:ActivatedRoute,private api:ApiService,private editCOntactRouter:Router){

  }
ngOnInit(): void {
  this.editContactActivatedRoute.params.subscribe((data:any)=>{
    console.log(data.id);
    this.contactId=data.id
    console.log(this.contactId);
    // fuction call to api to get contacts details 
    this.api.viewContact(this.contactId).subscribe((result:any)=>{
      console.log(result);
      this.contactDetails=result
      console.log(this.contactDetails);
    })
  })

  this.api.allGroups().subscribe((datas)=>{
    console.log(datas);
    this.groupDetails=datas
    
  })
}

//function to get edit contact details

editContact(contactDetails:any){
  this.api.updateContact(this.contactId,contactDetails).subscribe((result)=>{
    alert('Contacts are updated')
this.editCOntactRouter.navigateByUrl('')

  })

}
}
