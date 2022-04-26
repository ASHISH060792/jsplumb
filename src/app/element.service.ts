import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef
} from '@angular/core';
import { jsPlumb } from 'jsplumb';
import Element from './element';
import Group from './group';
import { ElementComponent } from './element/element.component';
import { GroupComponent } from './group/group.component';

@Injectable()
export class ElementService {
  private containerRef: ViewContainerRef;
  jsPlumbInstance = jsPlumb.getInstance();

  constructor(private factoryResolver: ComponentFactoryResolver) {
    this.jsPlumbInstance.bind('click', conn => {
      this.jsPlumbInstance.deleteConnection(conn);
    });
  }

  public setContainer(containerRef: ViewContainerRef) {
    this.containerRef = containerRef;
  }

  public addElement(node: Element) {
    const factory = this.factoryResolver.resolveComponentFactory(
      ElementComponent
    );
    const componentRef = this.containerRef.createComponent<ElementComponent>(
      factory
    );
    componentRef.instance.element = node;
    componentRef.instance.jsPlumbInstance = this.jsPlumbInstance;
  }

  public addGroup(node: Group) {
    console.log(node);
    const factory = this.factoryResolver.resolveComponentFactory(
      GroupComponent
    );
    const componentRef = this.containerRef.createComponent<GroupComponent>(
      factory
    );
    componentRef.instance.group = node;
    componentRef.instance.jsPlumbInstance = this.jsPlumbInstance;
  }
}
