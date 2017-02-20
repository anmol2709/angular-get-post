import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Task} from '../task'
import {AppService} from "../app.service";
//import error = webdriver.error;
//import error = webdriver.error;

@Component({
  selector: 'create',
  templateUrl: './app/create/create.component.html',
  styleUrls: ['./app/create/create.component.css']
})
export class CreateComponent  {
  task:Task=new Task()
  index:number;
  constructor(private router: Router,private route: ActivatedRoute, private service:AppService) {}
  ngOnInit(){
    this.route.params.subscribe((data: any) => {
      this.index = +data.i;
      if(this.index||this.index===0){
        this.task=this.service.tasks[this.index];
//Using Observable GET HTTP
        this.service.getData().subscribe((data1 :any)=>{
          alert(JSON.stringify(data1))
        },
          (e:any)=> {
          alert(e);

        },
          ()=>
          {
          alert("completed")
          }
        );

        // this.service.postData().subscribe((data1 :any)=>{
        //     alert(JSON.stringify(data1))
        //   },
        //   (e:any)=> {
        //     alert(e);
        //
        //   },
        //   ()=>
        //   {
        //     alert("completed")
        //   }
        // );


        // Using Promise
        // this.service.getData().then((data1 :any)=>{
        //   alert(JSON.stringify(data1))},error=>{
        //     alert(error)
        //   }
      }

    });
  }
  submit(){

    if (this.index||(this.index===0)){

      this.service.delete (this.index);
      this.service.add(this.task);
      this.router.navigate(['show']);
      // alert(" TASK EDITED");
    }
    else{
  this.service.add(this.task);
  this.router.navigate(['show']);
  // alert("NEW TASK ADDED");
}

  }

  goHome(){
    this.router.navigate(['home']);
  }

}
