import { createAction, props } from "@ngrx/store";
import { Flight } from '../flight';

export const loadFlights = createAction(
  '[FlightBooking] loadFlights',
  props<{from: string; to: string}>()
);

export const flightsLoaded = createAction(
  '[FlightBooking] flightsLoaded',
  props<{flights: Flight[]}>()
);

export const loadFlightsError = createAction(
  '[FlightBooking] loadFlightsError',
  props<{error: unknown}>()
);

export const saveFlight = createAction(
  '[FlightBooking] loadFlightsError',
  props<{flight: Flight}>()
);

export const flightSaved = createAction(
  '[FlightBooking] loadFlightsError',
  props<{flight: Flight}>()
);

export const saveFlightError = createAction(
  '[FlightBooking] loadFlightsError',
  props<{error: unknown}>()
);

export const saveAllFlights = createAction(
  '[FlightBooking] saveAll'
);

export const allFlightsSaved = createAction(
  '[FlightBooking] allFlightsSaved'
);

export const saveAllFlightsError = createAction(
  '[FlightBooking] saveAllFlightsError',
  props<{error: unknown}>()
);
