import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenavContainer, MatSidenav, MatSidenavContent} from '@angular/material/sidenav';
interface MenuItem { label: string; icon: string; }

@Component({
  selector: 'app-preview',
  imports: [MatSidenavContainer, MatSidenav, MatSidenavContent, MatNavList, MatListItem, MatIcon, NgFor],
  standalone: true,
  template: `
    <mat-sidenav-container class="h-64 border">
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item *ngFor="let item of menuItems" >
            <div class="flex items-center gap-2">
              <mat-icon>{{ item.icon }}</mat-icon>
              <span>{{ item.label }}</span>
          </div>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="p-4">Content preview area
          <div
            *ngFor="let item of menuItems"
            cdkDrag
            class="flex items-center p-2 bg-gray-100 rounded shadow-sm cursor-move"
          > {{ item.label }}</div>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class PreviewComponent {
  @Input() menuItems: MenuItem[] = [];
}

