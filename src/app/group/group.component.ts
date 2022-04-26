import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import Group from '../group';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements AfterViewInit {
  @Input() group: Group;
  @Input() jsPlumbInstance;
  @ViewChild('group') container;
  @ViewChild('small') smallGroup;

  constructor() {}

  ngAfterViewInit() {
    console.log('From group: ', this.container);
    this.jsPlumbInstance.addGroup({
      el: this.container.nativeElement,
      id: this.group.id,
      droppable: true
    });
  }
}
