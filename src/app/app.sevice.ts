import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get("https://dog.ceo/api/breed/hound/images");
  }

  getBreeds(){
    return this.http.get("https://dog.ceo/api/breeds/list/all");
  }

  getImage(propSelect) {
    return this.http.get("https://dog.ceo/api/breed/" + propSelect + "/images")
  }

  getSubImage(propSelect, subPropSelect) {
    return this.http.get("https://dog.ceo/api/breed/" + propSelect + "/" + subPropSelect +  "/images")
  }

}

