import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Slider from './components/Slider';
import MediaSection from './components/MediaSection';

function App() {
  document.title = 'Prime Vídeo'
  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <Slider/>
      <MediaSection title="Recomendados" seeMore/>
      <MediaSection title="Filmes de ação"/>
    </Fragment>
  );
}

export default App;
