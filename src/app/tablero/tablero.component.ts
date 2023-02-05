import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Evolutivo'          , cols: 1, rows: 1 },
          { title: 'Metrica del mes'    , cols: 1, rows: 1 },
          { title: 'Metrica semanal'    , cols: 1, rows: 1 },
          { title: 'Performance diaria', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Evolutivo'         , cols: 2, rows: 1 },
        { title: 'Metrica del mes'   , cols: 1, rows: 1 },
        { title: 'Metrica semanal'   , cols: 1, rows: 2 },
        { title: 'Performance diaria', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
