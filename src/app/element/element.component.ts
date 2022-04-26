import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { jsPlumb } from 'jsplumb';
import Element from '../element';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements AfterViewInit {
  @Input() element: Element;
  @Input() jsPlumbInstance;

  ngAfterViewInit() {
    const exampleDropOptions = {
      tolerance: 'touch',
      hoverClass: 'dropHover',
      activeClass: 'dragActive'
    };
    const source = {
      endpoint: ['Dot', { radius: 3 }],
      paintStyle: { fill: 'blue' },
      isSource: true,
      isTarget: false,
      connector: ['Flowchart', { cornerRadius: 4 }],
      connectorOverlays: [
        [
          'PlainArrow',
          {
            location: 1,
            width: 6,
            length: 6
          }
        ]
      ]
      // dropOptions: exampleDropOptions
    };
    const target = {
      endpoint: [
        'Dot',
        {
          radius: 3
          // cssClass: 'targetconnection'
        }
      ],
      paintStyle: { fill: 'blue' },
      isSource: false,
      isTarget: true,
      maxConnections: 10
    };
    this.jsPlumbInstance.addEndpoint(
      this.element.id,
      { anchor: 'Right', uuid: this.element.id + '_right' },
      source
    );
    this.jsPlumbInstance.addEndpoint(
      this.element.id,
      { anchor: 'Left', uuid: this.element.id + '_left' },
      target
    );
    console.log('From element: ', this.element.id);
    this.jsPlumbInstance.draggable(this.element.id);
  }

  // ngOnInit() {
  //   console.log(this.element.id, this.jsPlumbInstance);
  // }
}
