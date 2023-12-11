
import { IAddTask } from "../../../models";
import ApiAxios from "../../axios";

const TasksRequests = {
 PostTasks: async ({ title, description, dueDate }: IAddTask, ) => {
   
    const response = await ApiAxios.post(
        '/tasks',
        {
            title,
            description,
            dueDate,
        }, 
    )
    console.log(response);
  
    return response
},

GetTasks: async () => {
        const res = await ApiAxios.get(
            '/tasks',
        )
        console.log(res);
},

UpdateTasks: async ({ title, description, dueDate,id }: IAddTask) => {
    const res = await ApiAxios.put(
        `/tasks?id=${id}}`,
        {
            title,
            description,
            dueDate
        },
    )
    console.log(res);
},

 DeleteTasks: async () => {
    const res = await ApiAxios.delete(
        `/tasks?id=${''}}`,
        )
        console.log(res);
  }
}

export default TasksRequests