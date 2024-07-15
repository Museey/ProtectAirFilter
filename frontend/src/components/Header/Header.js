import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Protect Filter
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/dashboard">Admin</Link>
                  {/* <Link to='/orders'>Orders</Link> */}
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <li className={classes.line}>
              <Link to="https://line.me/ti/p/~0612521221">
                Line@
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
