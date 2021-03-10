import React, { Dispatch, SetStateAction, useState } from 'react';
import './nav.css';

export const Nav = (): JSX.Element => {
  return (
    <nav>
      <ul className="left">
        <li className="logo">
          <a href="#">SoulOTrip</a>
        </li>
        <li>
          <a href="#">Adventure Trips</a>
          <ul className="drop-menu">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </li>
        <li>
          <a href="#">Top Destinations</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
      </ul>
      <ul className="right">
        <li className="">
          <a href="#">Username</a>
        </li>
        <li className="">
          <a href="/login">Login</a>
        </li>
        <li className="">
          <a href="/register">Register</a>
        </li>
      </ul>
    </nav>
  );
};
