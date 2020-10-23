import React from 'react';

const UserContext = React.createContext({
    categories: [],
    services: [],
    getCategoriesAndServices: () => {},
    setSearchService: () => {},
});

export default UserContext;

