import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materialApp';

  empty = true;

  Duties = [ /*{itemName: ' first job', itemPriority: 'High'},
  {itemName: ' second job', itemPriority: 'Low'},
{itemName: ' third job', itemPriority: 'Medium'},*/]
 
   myjobs : string = "";
   myprio : string = "";

/* this edit way*/
editduty: string = ""
editPrio: string = ""  



   add(){
     this.Duties.push({itemName: this.myjobs , itemPriority: this.myprio});
     if(this.Duties.length > 0){
      this.empty = false; 
     }   
     this.myjobs = "";
     this.myprio = "";
   }

   remove(jobs){
    let index = this.Duties.indexOf(jobs)
    this.Duties.splice(index, 1);
  }

  EditJobs(jobs){
    let index = this.Duties.indexOf(jobs)
    this.Duties[index].itemName = prompt("Edit task:");
    this.Duties[index].itemPriority = prompt("Edit Priority:");
   
    /* this code works for my textboxs below
    this.Duties[index].itemName = editduty;
    this.Duties[index].itemPriority = editPrio;
    */


/* this code works for my above textboxs 
    this.Duties[index].itemName = editduty;
    this.Duties[index].itemPriority = editPrio;
      
     this. myjobs = ""
     this.editPrio = ""
     this.editduty = ""
     this.editPrio = ""  
*/
}

}
