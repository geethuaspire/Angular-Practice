import { Component, OnInit } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-transformation-operator',
  templateUrl: './transformation-operator.component.html',
  styleUrls: ['./transformation-operator.component.scss']
})
export class TransformationOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent<PointerEvent>(document,'click');
    const positions = clicks.pipe(map(ev=>ev.clientX));
    positions.subscribe(positionXAxis=>console.log("User clicked x",positionXAxis))
  }

}
