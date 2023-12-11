import { Routes} from 'react-router-dom';
import {AuthRoutes} from '../../routes';
import {UnAuthRoutes} from '../../routes';
import { useAppSelector } from '../../hooks/redux';

function Navigation() {

   const token = useAppSelector((state) => state.userAuth.accessToken);
    console.log(token, 'TOKEN');
 
   return (
      <Routes>
      {token ? 
       AuthRoutes
       : 
        UnAuthRoutes
      }
    </Routes>
    );
  }
 
 export default Navigation;
   
