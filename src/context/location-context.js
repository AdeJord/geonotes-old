import { createContext } from "react";


const LocationContext = createContext({
    latitude: (null),
    longitude: (null)
});

export default LocationContext