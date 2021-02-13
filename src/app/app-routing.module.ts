import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModelDrivenFormComponent } from "./model-driven-form/model-driven-form.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/template",
    pathMatch: "full"
  },

  { path: "template", component: TemplateDrivenFormComponent },
  { path: "model", component: ModelDrivenFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
