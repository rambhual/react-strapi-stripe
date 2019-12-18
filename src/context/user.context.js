import React, { useState, createContext, useEffect } from "react";
import ProductService from "../sevices/product.service";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const userService = new ProductService();
      const users = await userService.getAll();
      setUsers(users.data);
    }
    setLoading(false);
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading }}>
      {children}
    </UserContext.Provider>
  );
};
