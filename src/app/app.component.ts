import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosService } from './_services/todos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testes-angular';
  public inputValue: string = '';
  outputValue: string = '';
  onClick() {
    this.outputValue = this.inputValue;
  }
  /**
   *
   */
  // constructor(private todoService: TodosService) {

  // }
  // ngOnInit(): void {
  //   this.todoService.getAll().subscribe((response) => {
  //     console.log(response)
  //   })

  //   this.todoService.getById(1).subscribe((response) => {
  //     console.log(response, "by id")
  //   })
  // }
}
