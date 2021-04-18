import React, { useContext }  from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import PrivateRoute from './PrivateRoute'
import OrderList from '../Deshboard/OderList/OrderList';
import MakeAdmin from '../Deshboard/MakeAdmin/MakeAdmin';
import AddService from '../Deshboard/AddService/AddService';
import ManageService from '../Deshboard/ManageService/ManageService';
import Book from '../Deshboard/Customer/Book';
import BookingList from '../Deshboard/Customer/BookingList';
import Review from '../Deshboard/Customer/Review';
import Services from '../Deshboard/Customer/Services';
import { AdminContex } from '../../App';
import NotFound from '../NotFound/NotFound';
 

 
const Navlink = () => {

    const [admin,setadmin] = useContext(AdminContex)
    
    return !admin ? (
        <div>
          <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route exact path="/login"><Login></Login></Route>
                <Route exact path="/signup"><Signup></Signup></Route>
                <PrivateRoute exact path="/book"><Book></Book></PrivateRoute>
                <PrivateRoute exact path="/book/:id"><Book></Book></PrivateRoute>
                <PrivateRoute exact path="/bookinglist"><BookingList></BookingList></PrivateRoute>
                <PrivateRoute exact path="/review"><Review></Review></PrivateRoute>
                <PrivateRoute exact path="/deshboard"><Services></Services></PrivateRoute>
                <Route><NotFound></NotFound></Route>
            </Switch>
        </div>
      ) : 
        (<div>
            <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route exact path="/login"><Login></Login></Route>
                <Route exact path="/signup"><Signup></Signup></Route> 
                <PrivateRoute exact path="/deshboard"><Services></Services></PrivateRoute>
                <PrivateRoute exact path="/orderlist"><OrderList></OrderList></PrivateRoute>
                <PrivateRoute exact path="/makeadmin"><MakeAdmin></MakeAdmin></PrivateRoute>
                <PrivateRoute exact path="/addservices"><AddService></AddService></PrivateRoute>
                <PrivateRoute exact path="/manageservices"><ManageService></ManageService></PrivateRoute>
                <Route><NotFound></NotFound></Route>
            </Switch>
        </div>
    );
};

export default Navlink;