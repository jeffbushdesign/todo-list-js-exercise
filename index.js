// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}

// prints out the provide task's details
function logTaskState(task) {
  console.log(
    `${task.title} has${task.complete ? " " : " not "}been completed.`
  );
}

// marks the provided task as completed
function completeTask(task) {
  task.complete = true;
}

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean cat litter has not been completed
task1.markCompleted();
task1.logState(); // Clean cat litter has been completed

// for now let's just make sure we see our tasks
console.log(tasks);
