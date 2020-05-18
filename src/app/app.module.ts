import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from "./app.sevice";
import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
  declarations: [AppComponent, CapitalizePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
