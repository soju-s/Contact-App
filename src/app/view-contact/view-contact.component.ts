import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contact:any={}


  contactId:any=''

  groupName:any=''

  constructor(private active:ActivatedRoute,private api:ApiService){


  }
  ngOnInit(): void {


     //to get path parameter from url

    this.active.params.subscribe((data:any)=>{
      console.log(data.id);
      this.contactId=data.id
      console.log(this.contactId);
      
      
    })

    //to get details of particular contact

    this.api.viewContact(this.contactId).subscribe((resulat:any)=>{
      console.log(resulat);
      this.contact=resulat

      // to get value of groupid from contact

      let groupId=this.contact.groupId
      console.log(groupId);

      //api call to get groupid data

      this.api.viewContactGroup(groupId).subscribe((datas:any)=>{
        console.log(datas);
        this.groupName=datas
      })
      
      
    })
    
  }

}
