import { Route } from "react-router-dom";
import { AuthGuard } from "../../guards";
import { Home } from "../../pages";
import { ContactUs } from "../../pages";
import { AddTaskToDo } from '../../pages';
import { ProgramerTask } from '../../pages';
import { EdetTasks } from '../../pages';
import { NotFound } from '../../components/organism';
import { Layout } from '../../navbar/index.tsx';

const AuthRoutes = [
   <Route path='/' element={<Layout />}>
        <Route key="Home" index element={<AuthGuard component={<Home />} />} />
        <Route index element={<AuthGuard component={<Home />} />}/>
        <Route path="about" element={<AuthGuard component={<ContactUs/>} />} />
        <Route path="task" element={<AuthGuard component={<AddTaskToDo />} />} />
        <Route path='programmertask' element={<AuthGuard component={<ProgramerTask />} />} />
        <Route path='edettask' element={<AuthGuard component={<EdetTasks  />} />} />
        <Route path="*" element={<AuthGuard component={<NotFound  />} />} />
    </Route>

]

export default AuthRoutes;