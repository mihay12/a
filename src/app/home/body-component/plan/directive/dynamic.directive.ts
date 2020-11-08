import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[dynamic]',
  exportAs: 'dynamicdirective'
})
export class DynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}