import { TodoList } from 'TodoList';
import { Metadata } from './Metadata';

const todoList = new TodoList<Metadata>();

// Variante 1
interface Assignee {
    assignee: string;
}

const assigneeChrisf: Assignee = {
    assignee: '@chrisf'
};

// zu Variante 1
todoList.note('Code aufräumen', assigneeChrisf);

// Variante 2
todoList.note('UI ergänzen', { assignee: '@chrisf'});

const improveErrorHandlingId = todoList.note('Felerbehandlung verbessern',
{ assignee: '@chrisf'}
);

todoList.edit(improveErrorHandlingId, 'Fehlerbehandlung verbessern');
todoList.tickOff(improveErrorHandlingId);

console.log(todoList.getOpenTodos());



const showOpenTodos = function (todoList: TodoList<unknown>) {
    console.log(todoList.getOpenTodos());
};

showOpenTodos(todoList);