import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { TodoListItem } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly columns = ['done', 'content'];

  readonly title$ = this.todoListStore.title$;
  readonly items$ = this.todoListStore.items$;
  readonly editing$ = this.todoListStore.editing$;

  readonly addDisabled$ = this.todoListStore.addDisabled$;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id$ = this.route.paramMap.pipe(map(params => params.get('id') ?? ''));

    this.todoListStore.loadList(id$);
  } 

  addEmpty():void {
    this.todoListStore.addItem();
  }

  setDone(item: TodoListItem, done: boolean): void {
    this.todoListStore.updateItem({ id: item.id, update: { done } });
  }

  setContent(item: TodoListItem, content: string): void
}
