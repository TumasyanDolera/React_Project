import { createSlice } from "@reduxjs/toolkit";
interface Task {
    id: number;
  }
interface TaskState {
    toDoList: Task[];
    editTaskObj: Task | null;
    checkedTasks: Task[];
  }
   

const initialState:TaskState = {
    toDoList: [],
    editTaskObj: null,
    checkedTasks:[],
 
}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getAllTasks(state, action) {
            state.toDoList = [...action.payload]
        },

        removeSingleTask(state, action){
            state.toDoList =  state.toDoList.filter(item => action.payload !== item.id)
        },
        
        createTask(state, action) {
            state.toDoList = [...state.toDoList, action.payload]
        },

        putTask(state, action) {
            const index = state.toDoList.findIndex((item) => item.id === action.payload.data.id);
            state.toDoList[index] = action.payload.data;
          },
        getEditTask(state, action) {
            state.editTaskObj = action.payload
        },
    }
 })

export const {getAllTasks,removeSingleTask,createTask, putTask,getEditTask} = taskSlice.actions;
export const setUserTask = taskSlice.reducer;
