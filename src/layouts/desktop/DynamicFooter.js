import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PostLoginFooter from "./PostLoginFooter";
import PreLoginFooter from "./PreLoginFooter";

const DynamicFooter = () => {
  const Location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    // const token = user?.accessToken
    // if (token) {
    setUser(JSON.parse(localStorage.getItem("user")));
    // }
  }, [Location]);

  return (
    <>{user ? <PostLoginFooter userDetails={user} /> : <PreLoginFooter />}</>
  );
};

export default DynamicFooter;
