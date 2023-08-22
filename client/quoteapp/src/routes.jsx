import Login from './Components/Login';
import Signup from './Components/signup';
import Profile from './Components/Profile';
import CreateQuote from './Components/CreateQuote';
import Home from './Components/Home';
import OtherUserProfile from './Components/otherUserProfile';

export const routes = [
    {path:"/",element:<Home />},
    {path:"/create",element:<CreateQuote />},
    {path:"/login",element:<Login />},
    {path:"/signup",element:<Signup />},
    {path:"/profile",element:<Profile />},
    {path:"/profile/:userid",element:<OtherUserProfile />}
]