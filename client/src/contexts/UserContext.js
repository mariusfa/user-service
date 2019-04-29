import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider(props) {
  const [user, setUser] = useState("test");

  function changeUser(username) {
    console.log(username);
    setUser(username);
  }

  return(
      <UserContext.Provider
        value={{
          data: user,
          setData: changeUser
          
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