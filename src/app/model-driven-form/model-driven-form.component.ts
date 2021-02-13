import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-model-driven-form",
  templateUrl: "./model-driven-form.component.html",
  styleUrls: ["./model-driven-form.component.css"]
})
export class ModelDrivenFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  userInfo = this.fb.group({
    fname: ["", Validators.required],
    lname: ["", Validators.required]
  });
  ngOnInit() {}
  get registerFormControl() {
    return this.userInfo.controls;
  }
  formSubmit() {
    if (this.userInfo.valid === true) {
      alert("form is valid");
    } else {
      alert("form is invalid");
    }
  }
}
