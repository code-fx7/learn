import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { TodoListItem } from './todo/todo.model';
import { Observable, switchMap } from "rxjs";
import { TodoService } from "./todo/todo.service";

interface TodoListState {
  id: string;
  title: string;
  items: TodoListItem[];
  loading: boolean;

  editing?: string;
}

@Injectable()
export class TodoListStore extends ComponentStore<TodoListState> {
  // Default Selectors
  readonly title$ = this.select((state) => state.title);
  readonly items$ = this.select(( { items }) => items);
  readonly editing$ = this.select(( { editing }) => editing);
  readonly loading$ = this.select(( { loading }) => loading):

  // View Model
  readonly addDisabled$ = this.select(this.loading$, this.editing$, (loading, editing) => {
    return loading || editing !== undefined;
  });

  readonly editItem = this.updater((state, id: string | undefined) => {
    return { ...state, editing: id };
  });

  readonly loadList = this.effect((id$: Observable<string>) =>
  id$.pipe(
    switchMap(id => {
      this.patchState({ loading: true });
      return this.todoService.getList(id).pipe(
        tapResponse(
          list=> {
            this.patchState({ ...list, loading: false, editing: undefined });
          },
          () => {
            this.patchState({ loading: false });
          },
        ),
      );
    }),
  ),
);
  
  constructor(private todoService: TodoService) {
    super({ id: '', title: '', items: [], loading: true });
  }
}
