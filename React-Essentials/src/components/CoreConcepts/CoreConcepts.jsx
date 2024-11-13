import CoreComponent from "../CoreComponent/CoreComponent";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Utils/Section";
function CoreConcepts() {
  return (
    <Section id="core-concepts" text="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((item, index) => {
          return <CoreComponent key={index} {...item} />;
        })}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
