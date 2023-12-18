import { Route } from "react-router-dom";
import { UnAuthGuard } from "../../guards";
import { LogIn, Register } from "../../pages";



const UnAuthRoutes = [
    <Route key="Login" path="/login" element={<UnAuthGuard component={<LogIn />} />} ></Route>,
    <Route key="Register" path="/register" element={<UnAuthGuard component={<Register />} />} > </Route>,
]

export default UnAuthRoutes;