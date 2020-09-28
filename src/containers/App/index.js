import React from 'react';
import './style.scss';

import Preloader from 'components/common/Preloader'
import Header from 'components/common/Header';

function App() {
  return (
    <main className="App">
      <Preloader />
      <Header />
    </main>
  );
}

export default App;
