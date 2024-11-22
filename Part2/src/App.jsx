import Header from "./components/Header/Header";
import componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";

function App() {
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
      </main>
    </div>
  );
}

export default App;
