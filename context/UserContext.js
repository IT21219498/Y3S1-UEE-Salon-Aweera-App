import { createContext, useState } from "react";

const UserType = createContext();

const UserContext = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [loginUser, setLoginUser] = useState(null);

  return (
    <UserType.Provider value={{ userId, setUserId, loginUser, setLoginUser }}>
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserContext };
