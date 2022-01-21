import React, { useState } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import BasicSearch from './BasicSearch';

const Home = (props) => {

  return <div><BasicSearch query={props.query} setQuery={props.setQuery} cards={props.cards} setCards={props.setCards}/></div>;
};

export default Home;
