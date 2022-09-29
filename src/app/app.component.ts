import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-todo-list';
  /* An empty array that is responsible
       to add a division */
  public items: any = [];

  /* A two-way binding performed which
          pushes text on division */
  public newTask: any;

  /* When input is empty, it will
          not create a new division */
  public addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  /* This function takes to input the
          task, that has to be deleted*/
  public deleteTask(index: any) {
    this.items.splice(index, 1);
  }
}
