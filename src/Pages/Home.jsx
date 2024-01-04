import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import Requests from '../Request'
export const Home = () => {
  return (
    <div>
        <Main/>
        <Row RowId='1' title="Popular" fetchURL={Requests.requestPopular}/>
        <Row RowId='2' title="Up Coming" fetchURL={Requests.requestUpcoming}/>
        <Row RowId='3' title="Trending" fetchURL={Requests.requestTrending}/>
        <Row RowId='4' title="TopRated" fetchURL={Requests.requestTopRated}/>
        <Row RowId='5' title="Horror" fetchURL={Requests.requestHorror}/>
    </div>
  )
}

export default Home;