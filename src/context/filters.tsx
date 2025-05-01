import * as React from 'react';


interface FiltersContextType {
  filters: any;
  setFilters: any;
}

export const FiltersContext = React.createContext<FiltersContextType | null>(null);

export function FiltersProvider({ children }: React.PropsWithChildren) {
  const [filters, setFilters] = React.useState({
    minPrice: 0,
    maxPrice: 0,
    category: 'all',
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
