import { configureStore } from "@reduxjs/toolkit";

import serviceStepsReducer from './features/serviceStepsSlice';
import userReducer from "./features/userSlice";
import heroReducer from "./features/heroSlice";
import contactReducer from "./features/contactSlice";
import acTypesReducer from './features/actTypesSlice';
import metaReducer from "./features/metaSlice";
import servicesReducer from "./features/servicesSlice";
import bookingReducer from "./features/bookingSlice";

export const store = configureStore({
    reducer: {
        serviceSteps: serviceStepsReducer,
        user: userReducer,
        hero: heroReducer,
        contact: contactReducer,
        ac: acTypesReducer,
        meta: metaReducer,
        services: servicesReducer,
        booking: bookingReducer,
    },
});
