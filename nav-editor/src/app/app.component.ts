import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorComponent } from "./editor/editor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nav-editor';
}
