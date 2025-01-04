import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept/CoreConcept";
import Section from "./Section";

export default function CoreConcepts(){
    let i = 1;
    return(
        <div>
            <Section id="core-concepts" title= "Core Concepts">
                <ul>
                    {CORE_CONCEPTS.map((conceptItem)=> (<CoreConcept key={i++} {...conceptItem} />))}
                </ul>
            </Section>
        </div>
    );
}