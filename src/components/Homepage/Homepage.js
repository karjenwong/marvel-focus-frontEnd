import React from 'react';
import CharacterList from './CharacterList'
import YoutubeModal from '../YoutubeModal/YoutubeModal'

const Homepage = () => {
  return (
    <div>
      <h1>In theaters now!</h1>
      <YoutubeModal/>
      <CharacterList/>
    </div>
  )
}

export default Homepage;
