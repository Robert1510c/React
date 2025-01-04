import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {useState, Fragment} from 'react';
import {EXAMPLES} from './data.js';
import Examples from './components/Examples.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Section from './components/Section.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
