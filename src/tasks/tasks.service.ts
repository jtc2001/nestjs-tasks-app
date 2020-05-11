import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 } from 'uuid';
import { CreateTaskDto } from './dto/task.create.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => { task.id === id })
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto
    const task: Task = {
      id: v1(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }


}
