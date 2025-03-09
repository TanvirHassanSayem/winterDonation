import React  from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <>
            <NavLink
  to={to}
  className={({ isActive, isPending }) =>
    isActive ? "bg-[#406147] active" : ""
  }
>
  {children}
</NavLink> 
        </>
    );
}

export default ActiveLink;
