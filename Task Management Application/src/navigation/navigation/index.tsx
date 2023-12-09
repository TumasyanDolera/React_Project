import { Routes} from 'react-router-dom';
import { AuthRoutes } from '../../routes';
import { UnAuthRoutes } from '../../routes';
import { useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';

function Navigation() {
   const token = useSelector((store:AnyAction)=> store.userToken.successAuthorization)

   console.log(token, 'TOKEN');
   
   return (
      <Routes>
         {token ? AuthRoutes : UnAuthRoutes}
      </Routes>
     )
   }
   
   export default Navigation