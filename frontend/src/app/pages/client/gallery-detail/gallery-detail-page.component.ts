import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { DetailContentComponent } from './components/detail-content/detail-content.component';
import { DetailRelatedComponent } from './components/detail-related/detail-related.component';
import { DetailFooterComponent } from './components/detail-footer/detail-footer.component';

@Component({
    selector: 'app-gallery-detail-page',
    standalone: true,
    imports: [
        CommonModule,

        DetailContentComponent,
        DetailRelatedComponent,
        DetailFooterComponent
    ],
    template: `
    <div class="flex flex-col font-body overflow-x-hidden antialiased">
         <app-detail-content [itemId]="itemId"></app-detail-content>
         <app-detail-related></app-detail-related>
         <app-detail-footer></app-detail-footer>
    </div>
  `,
    styles: [`
        :host {
            display: block;
            width: 100%;
        }
    `]
})
export class GalleryDetailPageComponent implements OnInit {
    private route = inject(ActivatedRoute);
    itemId: string | null = null;

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.itemId = params.get('id');
        });
    }
}
