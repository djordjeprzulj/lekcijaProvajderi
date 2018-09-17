import { Component } from '@angular/core';
import { SimpleService } from './simple.service';

@Component({
  selector: 'app-parent',
  template: `<div class="parent">
              <p>Parent</p>
              <form novalidate>
                <div class="form-group">
                  <input type="text" class="form-control"
                    name="value" [(ngModel)]="service.value">
                </div>
              </form>
              <ng-content></ng-content>
            </div>`,
  styles: [`
    .parent {
      background-color: #D1E751;
      padding: 10px;
    }
  `],
  // providers: [SimpleService]
  viewProviders: [SimpleService]

})
export class ParentComponent {
  constructor(public service: SimpleService) { }
}
