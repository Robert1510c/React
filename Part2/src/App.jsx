import Header from "./components/Header/Header";
import componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const[selectedTopic, setSelectedTopic] = useState('components');
  let tabContent = "Please select the content"
  if (selectedTopic){
    tabContent = 
      <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
  }
  console.log('Rendering App')
  function handleClick(selectedButton){
    console.log(selectedButton)
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>

            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}></CoreConcept>

            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}></CoreConcept>

            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}></CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onAnyEventWeWant={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onAnyEventWeWant={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onAnyEventWeWant={()=>handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onAnyEventWeWant={()=>handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
 
export default App;
