import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
// import { AnalyticsService } from './app/shared/analytics.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  // Wenn eine Anwendung keine Module hat, kann ein Service auch hier global bereitgestellt werden.
  providers: [
    // AnalyticsService
  ]
});
