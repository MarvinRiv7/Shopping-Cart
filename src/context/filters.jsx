import { createContext, useState } from "react";

//Crear el contexto
export const FIltersContext = createContext()

//Crear el Provider para proveer el contexto
export const FiltersProvider = ({children}) => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FIltersContext.Provider value={{
            filters, 
            setFilters
        }}>
        {children}
        </FIltersContext.Provider>
    )
} 