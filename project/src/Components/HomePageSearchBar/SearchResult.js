import React from 'react'
import "./SearchResult.css";



  

const SearchResult = ({result}) => {
  
  
  
  
  return (
    <>
    <div className='search-result' onClick={(e)=>  window.location.href='/courses'}>{result.course}</div>
    </>
  )
}

export default SearchResult