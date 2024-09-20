import {configureStore} from "@reduxjs/toolkit"; 
import userReducer from "./userSlide";
  
const appStore = configureStore(
    {
        reducer: {
            user:userReducer, 
        }
    }
)

export default appStore;