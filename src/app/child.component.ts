import { Component } from '@angular/core';
import { SimpleService } from './simple.service';

@Component({selector: 'app-child',
            template: `<div class="child">
                          <p>Child</p>
                            {{ service.value }}
                        </div>`,
            styles: [`
              .child {
                background-color: #239CDE;
                padding: 10px;
              }
            `]
})
export class ChildComponent {
  constructor(public service: SimpleService) { }
}
