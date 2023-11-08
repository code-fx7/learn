import { Card } from "./model/card.model";

export interface ConsumptionState {
  cards: Array<Card>
}

export interface AppState {
  consumption: ConsumptionState
}

export const initialState: ConsumptionState = {
  cards: [
    {name: 'Gefrierschrank', text: 'aktuelle Leistung', power: '100 Watt'},
    {name: 'Geschirrspüler', text: 'aktuelle Leistung', power: '200 Watt'},
    {name: 'Kühlschrank', text: 'aktuelle Leistung', power: '300 Watt'},
    {name: 'Kühlschrank Alt', text: 'aktuelle Leistung', power: '400 Watt'}
  ],
}
