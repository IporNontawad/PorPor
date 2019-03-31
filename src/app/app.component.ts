import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CommomServiceService } from './commom-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   Object={};
  request= {
    key1:50,
    key2:10
  }
results:any;
constructor(private service: CommomServiceService) {
  // this.getData();
  //console.log(this.results);
}

getData(){
      this.service.getData(this.request).subscribe((res) => {
        console.log("sdfsdfdsfsdf",res);
        
      })

}
}
