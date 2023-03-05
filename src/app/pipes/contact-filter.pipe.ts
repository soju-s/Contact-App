import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(allCOntact:any[],searchKey:string,propertyName:string): any[] {

    //array after transform
    const result:any=[]
    if(!allCOntact ||searchKey=='' ||propertyName==''){
      return allCOntact
    }
    allCOntact.forEach((contact:any)=>{
      if(contact[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(contact)
      }
    })
    return result;
  }

}
