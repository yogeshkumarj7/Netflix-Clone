import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import Requests from '../Request'
export const Home = () => {
  return (
    <div>
        <Main/>
        <Row title="Up Coming" fetchURL={Requests.requestUpcoming}/>
        <Row title="Popular" fetchURL={Requests.requestPopular}/>
        <Row title="Trending" fetchURL={Requests.requestTrending}/>
        <Row title="TopRated" fetchURL={Requests.requestTopRated}/>
        <Row title="Horror" fetchURL={Requests.requestHorror}/>
    </div>
  )
}

export default Home;