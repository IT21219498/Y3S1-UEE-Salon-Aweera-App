import { createContext, useState } from "react";

const UserType = createContext();

const UserContext = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [loginUser, setLoginUser] = useState(false);
  const [user, setUser] = useState("");

  return (
    <UserType.Provider
      value={{ userId, setUserId, loginUser, setLoginUser, user, setUser }}
    >
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserContext };
