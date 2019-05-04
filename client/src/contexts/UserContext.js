import React, { useState } from "react";

const UserContext = React.createContext({
  user: "",
  setUser: () => {}
});

function UserProvider(props) {
  const [user, setUser] = useState("");

  return(
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser
          
        }}
      >
        {props.children}
      </UserContext.Provider>
  );
}

export {
  UserProvider,
  UserContext
}