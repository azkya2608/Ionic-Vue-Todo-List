<template>
  <ion-page>
    <ion-header class="desktop">
      <ion-toolbar>
        <ion-title color="light">Gyizer</ion-title>
        <ion-note color="light" class="ion-text-uppercase">Todo App</ion-note>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div id="app" class="container">
        <div v-if="!isEditing">
          <input type="text" placeholder="Title..." v-model="todo">
          <ion-button @click="storeTodo" fill="outline">
            <ion-icon color="light" slot="icon-only" :icon="add" />
          </ion-button>
        </div>

        <div v-else>
          <input type="text" v-model="todo">
          <ion-button @click="updateTodo" fill="outline">Update</ion-button>
        </div>

        <ion-list>
          <ion-item v-for="(todo, index) in todos" :key="todo.id">
            {{ todo }}
            <div>
            <ion-button @click="editTodo(index, todo)" fill="outline">
              <ion-icon size="small" color="light" slot="icon-only" :icon="pencil" />
            </ion-button>
            <ion-button @click="removeTodo(index)" fill="outline">
              <ion-icon color="light" slot="icon-only" :icon="close" />            
            </ion-button>
            </div>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonList, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { add, close, pencil } from "ionicons/icons";

export default {
  name: "ToDoList",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  el: '#app',
  data() {
    return {
      isEditing: false,
      todo: '',
      todos: [],
      selectedTodo: null
    }
  },
  methods: {
    storeTodo() {
      this.todos.push(this.todo)
      this.todo = ''
    },

    editTodo(index, todo) {
      this.isEditing = true
      this.todo = todo
      this.selectedIndex = index
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo)
      this.todo = ''
      this.isEditing = false
    },
    
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  },
  setup() {
    return {
      add,
      close,
      pencil
    }
  }
}
</script>

<style scoped>
ion-toolbar {
  border: 2px solid #A35709;
}

.container {
  max-width: 300px;
  margin: auto;
}

ion-toolbar > ion-note {
  margin-left: 22px;
}

ion-toolbar,
ion-content{
  --background: #1B1A17;
}

.container > div {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

ion-icon {
  font-size: 15px;
}

ion-list {
  background: #1B1A17;
}

ion-list > ion-item {
  margin-bottom: 15px;
}

input {
  padding: 10px;
}

input,
ion-item {
  border: 2px solid #FF8303;
  border-radius: 4px;
  background: #1F1E1B;
  color: #F0E3CA;
}  

ion-button {
  --border-color: #FF8303;
  --color: #F0E3CA;
}

ion-item {
  --background: #1F1E1B;
  --color: #F0E3CA;
}

ion-item > div {
  margin-left: auto;
}

.desktop {
  display: none;
}

@media (min-width: 640px) {
.desktop {
    display: unset;
  }
}
</style>
