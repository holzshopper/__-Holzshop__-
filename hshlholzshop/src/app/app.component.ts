import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hshlholzshop';
  editor :EditorType = "login";

  get showLoginEditor() {
    return this.editor === "login";
  }

  get showRegistrationEditor() {
    return this.editor === "registration";
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
