<template>
  <div class="tasks_container">
    <div class="tasks_content">
      <p>Task List</p>
      <ul class="tasks_list">
        <li v-for="task in tasklist" :key="task.id">
          <p>{{ task.title }}</p>
          <p>{{ task.description }}</p>
          <button @click="toggleTask(task)">
            {{ task.completed ? 'Undo' : 'Complete' }}
          </button>
          <button @click="deleteTask(task)">Delete</button>
        </li>
      </ul>

      <!-- handling create a task -->
       <div class="add_task">
          <form v-on:submit.prevent="submitForm">
              <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" class="form-control" id="title" v-model="title">
              </div>
              <div class="form-group">
                  <label for="description">Description</label>
                  <textarea class="form-control" id="description" v-model="description"></textarea>
              </div>
              <div class="form-group">
                  <button type="submit">Add Task</button>
              </div>
          </form>
      </div> <!-- add_task closing div -->
    </div> <!-- tasks_contents closing div -->
  </div> <!-- tasks_container closing div -->
</template>

<script>
import api from '../api'

export default {
  data() {
    return {
      // tasklist 
      tasklist: [''],
      title: '',
      description: ''
    };
  },
  methods: {
    async getData() {
      try {
        // fetch data 
        const response = await api.get('/api/tasks/');
        // set the data returned as tasks
        this.tasklist = response.data;
        console.log(this.tasklist);
      } catch (error) {
        console.error('There was an error: ', error);
      }
    },
    async postData() {
      try {
        const response = await api.post('/api/tasks/', {
          title: this.title,
          description: this.description,
          completed: false
        });
        // append the returned data to the tasks array 
        this.tasklist.push(response.data);
        // reset the title and description field values 
        this.title = '';
        this.description = '';
      } catch (error) {
        // Log the error
        console.log(error);
      }
    },
    async updateTask(task) {
      try {
        // send a request to API to update the task
        const response = await api.put(`api/tasks/${task.id}`, {
          completed: !task.completed,
          title: task.title,
          description: task.description
        });

        // get the index of the task being updated 
        let taskIndex = this.tasks.findIndex(t => t.id === task.id);

        // reset the tasks array with the new data of the updated task 
        this.tasks = this.tasks.map((task) => {
          if (this.tasks.findIndex(t => t.id === task.id) === taskIndex) {
            return response.data;
          }
          return task;
        })
      } catch (error) {
        // log any error 
        console.log(error);
      }
    },
    async deleteTask(task) {
      // Confirm if one wants to delete the task
      let confirmation = confirm("Do you want to delete this task?"); 

      if(confirmation){
        try{

        // Send a request to delete the task
        await api.delete(`/api/tasks/${task.id}`);

        // Refresh the tasks
        this.getData();
        }catch(error){

        // Log any error

        console.log(error)
        }
      }
    }
  },
  mounted() {
    this.getData();
  }
}
</script>