import "./App.scss";
import Grid from './Grid';
import Header from './Header';
import Filter from './Filter';
import Pagination from './Pagination';
import loaderGif from '../media/loader.gif';
import React, { useState, useEffect } from 'react';

const BASE_URL = "https://rickandmortyapi.com/api";
const ENDPOINT = "/character";

const App = () => {
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterOption, setFilterOption] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const statuses = ['Alive', 'Dead', 'Unknown'];
  const genders = ['Female', 'Male', 'Genderless', 'Unknown'];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${ENDPOINT}?page=${currentPage}`);
        const data = await response.json();
        setCharList(data.results);
        setTotalPages(data.info.pages)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFilter = (option, value) => {
    setFilterOption(option);
    setFilterValue(value);
  };

  return (
    <div className="App">
      <Header/>
      {loading ? (
        <div  className='loader'>
          <img className='loaderImg' src={loaderGif} alt="Loading..." />
        </div>
      ) : (
        <>
          <Filter
            onFilter={handleFilter}
            statusesList={statuses}
            genderList={genders}
          />
          <Grid cardData={
            (filterOption && filterValue && filterOption=='name') ? 
             charList.filter(elem => elem.name.toLowerCase().includes(filterValue.toLowerCase()))
            : (filterOption && filterValue) ? charList.filter(elem => elem[filterOption] == filterValue)
            : charList
            }/>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
