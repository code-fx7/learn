import { Injectable } from '@angular/core';

// Empfohlende Weg

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  registerClick() {
    console.log('Clicked!');
  }
}

// Alternativer Weg
// Dann muss der Service global in der main.ts oder lokal in der jeweiligen Komponente, die den Service nutzen soll bereitgestellt werden.

// @Injectable()
// export class AnalyticsService {
//   registerClick() {
//     console.log('Clicked!');
//   }
// }
