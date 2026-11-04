import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  if (completed === undefined) {
    return taskRepository.findAll();
  }
  return taskRepository.findAll(completed === 'true');
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
