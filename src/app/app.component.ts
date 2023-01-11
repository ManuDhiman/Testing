import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  value="hello"
  display='';
  getName(name:string)
  {
    alert("name")
  }
  getData(val:string)
  {
    console.warn(val)
  }
  getvalue(val:string)
  {
    console.warn(val)
    this.display=val;
  }
  count=0;
  counter(type:string)
  {
    type==='add' ? this.count++:this.count--
  }

  show=true;
  Toggle(){
    this.show = !this.show;
  }

  list:any[]=[];

  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);
  }
  removetast(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }
}
