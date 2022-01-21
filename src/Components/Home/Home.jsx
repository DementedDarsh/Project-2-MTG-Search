import React, { useState } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import BasicSearch from './BasicSearch';

const Home = (props) => {

  return <div><BasicSearch cards={props.cards} setCards={setCards}/></div>;
};

export default Home;
