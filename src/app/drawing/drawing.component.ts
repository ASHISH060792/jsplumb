import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ElementService } from '../element.service';
import Element from '../element';
import Group from '../group';

@Component({
  selector: 'drawing-board',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements AfterViewInit {
  @ViewChild('elements', { read: ViewContainerRef })
  container: ViewContainerRef;
  elements: Element[] = [];
  groups: Group[] = [];
  elementPrefix = 'Element';
  groupPrefix = 'Group';

  constructor(
    private elementService: ElementService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.loadElements();

    // To avoid ExpressionChangedAfterItHasBeenCheckedError
    // More info: https://angular.io/errors/NG0100
    // this.cd.detectChanges();
  }

  loadElements() {
    this.elementService.setContainer(this.container);
  }

  addElement() {
    const element: Element = {
      id: `${this.elementPrefix} ${this.elements.length + 1}`
    };
    this.elements.push(element);
    this.elementService.addElement({ id: element.id });
    this.cd.detectChanges();
  }

  addGroup() {
    const group: Group = {
      id: `${this.groupPrefix} ${this.groups.length + 1}`
    };
    this.groups.push(group);
    this.elementService.addGroup({ id: group.id });
    this.cd.detectChanges();
  }
}
