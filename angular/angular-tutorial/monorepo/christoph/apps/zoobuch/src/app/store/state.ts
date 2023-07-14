import { Animal } from "../animal";

export interface ZoobuchState {
  myAnimals: Array<Animal>
}

export interface AppState {
  zoobuch: ZoobuchState
}

export const initialState: ZoobuchState = {
  myAnimals: [
    { name: 'Charlie', type: 'Affe' },
    { name: 'Schiggi', type: 'Schildkröte' },
    { name: 'Hedwig', type: 'Eule' },
    { name: 'Joanne', type: 'Giraffe' },
    { name: 'Scooby', type: 'Hund' },
  ]
}
