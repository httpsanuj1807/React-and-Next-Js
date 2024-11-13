import TabContent from "../TabContent/TabContent";
import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Utils/Section";
import Tabs from "../Tabs/Tabs";

function Example(){
    const [selectedItem, setSelectedItem] = useState();

    function clickHandler(currentItem){
      setSelectedItem(currentItem);
    }
    return(
        <Section id="examples" text="Example" >
        <Tabs containerType="menu" button={
        <>
          <TabContent onSelect={clickHandler} isActive={selectedItem === "components"}>Components</TabContent>
          <TabContent onSelect={clickHandler} isActive={selectedItem === "jsx"}>JSX</TabContent>
          <TabContent onSelect={clickHandler} isActive={selectedItem === "props"}>Props</TabContent>
          <TabContent onSelect={clickHandler} isActive={selectedItem === "state"}>State</TabContent>
        </>
        }>
        {(selectedItem) ?<div id="tab-content">
          <h3>{EXAMPLES[selectedItem].title}</h3>
          <p>{EXAMPLES[selectedItem].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedItem].code}
            </code>
          </pre>
        </div> : <p>Please select any tab</p>}
        </Tabs>
      </Section>
    );
}

export default Example;