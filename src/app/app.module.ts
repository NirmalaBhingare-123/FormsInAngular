import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { ModelDrivenFormComponent } from "./model-driven-form/model-driven-form.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
