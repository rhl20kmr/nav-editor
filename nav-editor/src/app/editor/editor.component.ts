import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GeneratorService } from './generator.service';
import { PreviewComponent } from '../preview/preview.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

interface MenuItem {
  label: string;
  icon: string;
}

@Component({
  standalone: true,
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  imports: [
    FormsModule,
    MonacoEditorModule,
    NgFor,
    NgIf,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    PreviewComponent
  ]
})
export class EditorComponent {
  newItem: MenuItem = { label: '', icon: 'home' };
  menuItems: MenuItem[] = [];
  availableIcons = ['home', 'dashboard', 'settings', 'account_circle', 'info'];
  generatedCode = { html: '', ts: '' };

  constructor(private gen: GeneratorService) {}

  addItem() {
    if (this.newItem.label.trim()) {
      this.menuItems.push({ ...this.newItem });
      this.newItem.label = '';
    }
  }

  drop(event: CdkDragDrop<MenuItem[]>) {
    moveItemInArray(this.menuItems, event.previousIndex, event.currentIndex);
  }

  generateCode() {
    this.generatedCode = this.gen.build(this.menuItems);
  }

  copyCode() {
    navigator.clipboard.writeText(this.generatedCode.html + '\n\n' + this.generatedCode.ts);
  }
}
