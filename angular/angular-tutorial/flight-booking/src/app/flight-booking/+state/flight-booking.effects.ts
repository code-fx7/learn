import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { of } from "rxjs";

import { catchError, map, switchMap } from "rxjs";
import { FlightService } from '../flight.service';
import { allFlightsSaved, flightSaved, flightsLoaded, loadFlights, loadFlightsError, saveAllFlights, saveAllFlightsError, saveFlight, saveFlightError } from "./flight-booking.action";
import { FlightBookingAppState, flightBookingFeatureKey} from './flight-booking.reduvćer';

@Injectable()
export class FlightBookingEffects {

  flightsLoad$ = createEffect(() => this.actions$.pipe(
    ofType(loadFlights),
    switchMap(a => this.flightService.find(a.from, a.to).pipe(
      map(flights => flightsLoaded({flights})),
      catchError(error => of(loadFlightsError({error})))
    )),
  ));

  flightsSave$ = createEffect(() => this.actions$.pipe(
    ofType(saveFlight),
    switchMap(a => this.flightService.save(a.flight).pipe(
      map(flight => flightSaved({flight})),
      catchError(error => of(saveFlightError({error})))
    )),
  ));

  allFlightsSave$ = createEffect(() => this.actions$.pipe(
    ofType(saveAllFlights),
    concatLatestFrom(() => this.store.select(state => state[flightBookingFeatureKey].flights)),
    switchMap( ([action, flightsFromStore]) => this.flightService.saveAll(flightsFromStore).pipe(
      map(() => allFlightsSaved()),
      catchError(error => of(saveAllFlightsError({error})))
    )),
  ));

  constructor(
    private flightService: FlightService,
    private actions$: Actions,
    private store: Store<FlightBookingAppState>
  ) {}
}
