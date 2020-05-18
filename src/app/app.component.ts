import { Component, OnInit } from "@angular/core";
import { ConfigService } from "./app.sevice";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Dogs";
  list = [];
  breedList;
  subBreedList = [];
  showselect = false;
  propSelect: any;
  subPropSelect: any;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.Breeds();
    this.configService.getList().subscribe((data: any) => {
      this.list = data.message;
    });
  }

  Breeds() {
    this.configService.getBreeds().subscribe((data: any) => {
      this.breedList = data.message;
    });
  }

  showSelect() {
    this.subBreedList = this.breedList[this.propSelect];
    if (this.subBreedList.length > 0) {
      this.showselect = true;
    } else {
      this.showselect = false;
      this.subPropSelect = undefined;
    }
  }

  search() {
 
    if (this.propSelect == null && this.subPropSelect == undefined) {

      this.configService.getList().subscribe((data:any) =>{this.list = data.message});
      return 
    
    }


    if ( this.subPropSelect !== undefined ) {
      this.configService.getSubImage(this.propSelect, this.subPropSelect)
      .subscribe((data:any) => {
        this.list = data.message;
      })
    } else {
      this.configService.getImage(this.propSelect)
      .subscribe((data:any) =>{
        this.list = data.message;
    })
  }




}


clean(){
  this.list = null;
  this.propSelect = null;
  this.subPropSelect = undefined;
}

}


//     if (this.subPropSelect == undefined) {
//       console.log(3);
//       this.configService.getImage(this.propSelect).subscribe((data: any) => {
//         this.list = data.message;
//       });
//     } else if (this.subBreedList.length > 0) {
//       console.log(2);
//       this.configService
//         .getSubImage(this.propSelect, this.subPropSelect)
//         .subscribe((data: any) => {
//           this.list = data.message;
//         });
//     } else {
//       console.log(1);
//       this.configService.getImage(this.propSelect).subscribe((data: any) => {
//         this.list = data.message;
//       });
//     }
//   }
// }
