import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import { useState } from "react";
import Tabs from "./Tabs";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
    let tabContent = 'Please, select the content';
    if(selectedTopic){ 
        tabContent = <div id="tab-content">
        <h3> {EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
        </div>
        };

    function handleClick(selectedButton){
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
        tabContent = selectedButton;
  };

//   console.log('Rendering App');
    return(
        <Section id="examples" title="Examples">
          <Tabs ButtonsContainer="menu" buttons = {
            <>
              <TabButton isSelected={selectedTopic==='components'} onClick={()=>handleClick('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic==='jsx'} onClick={()=>handleClick('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic==='props'} onClick={()=>handleClick('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic==='state'} onClick={()=>handleClick('state')}>State</TabButton>
            </>
          }>
        {tabContent}
        </Tabs>
        </Section>
    );
}