import { Injectable } from '@angular/core';
interface MenuItem { label: string; icon: string; }

@Injectable({ providedIn: 'root' })
export class GeneratorService {
  build(menuItems: MenuItem[]) {
    const html = `<mat-sidenav-container>\n  <mat-sidenav mode="side" opened>\n    <mat-nav-list>\n` +
      menuItems.map(i =>
        `      <a mat-list-item>\n        <mat-icon>${i.icon}</mat-icon>\n        ${i.label}\n      </a>\n`
      ).join('') +
      `    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <!-- Your content here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>`;
      
    const ts = `import { Component } from '@angular/core';
      @Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
      })
      export class SidebarComponent {}`;
    
    return { html, ts };
  }
}

