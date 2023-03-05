import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor(private http:HttpClient) { }

  //all contacts to get all contact from api

  allContacts(){
    return this.http.get('http://localhost:3000/contacts')
  }

  //to view particular contact from api

  viewContact(contactId:string){

    return this.http.get('http://localhost:3000/contacts/'+contactId)

  }

  //to get particular group information inside another object

  viewContactGroup(groupId:string){

    return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  //call to get groups inside dropdown

  allGroups(){
    return this.http.get('http://localhost:3000/groups')
  }

  //call to post contact details to server

  addContact(contact:any){

    return this.http.post('http://localhost:3000/contacts',contact)
  }


  // api call to delete contact

  deleteContact(contactId:any){
return this.http.delete('http://localhost:3000/contacts/'+contactId)
  }

  //api call to update existing data in the server

  updateContact(contactId:string,contactBody:any){
    return this.http.put('http://localhost:3000/contacts/'+contactId,contactBody)
  }
}
