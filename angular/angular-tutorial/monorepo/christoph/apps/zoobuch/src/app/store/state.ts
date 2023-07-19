import { Animal } from "../animal";

export interface ZoobuchState {
  myAnimals: Array<Animal>
  selectedAnimal: string | null
}

export interface AppState {
  zoobuch: ZoobuchState
}

export const initialState: ZoobuchState = {
  myAnimals: [
    { id: '1', name: 'Charlie', type: 'Affe' },
    { id: '2', name: 'Schiggi', type: 'Schildkröte' },
    { id: '3', name: 'Hedwig', type: 'Eule' },
    { id: '4', name: 'Joanne', type: 'Giraffe' },
    { id: '5', name: 'Scooby', type: 'Hund' },
  ],
  selectedAnimal: null
}
