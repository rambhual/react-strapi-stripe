import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { userUrl } from "../utils/url";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(userUrl).then(response => {
      setUser(response);
      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
