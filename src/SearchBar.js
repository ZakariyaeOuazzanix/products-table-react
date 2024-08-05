import { useState } from 'react';

export default function SearchBar({setValueSearch}){


  function makeChange(){
    setValueSearch(document.getElementById('search').value);
  }
  return (
    <>
      <input type="text" placeholder="Search ..." onChange={makeChange} id='search'/>
    </>
  );
}