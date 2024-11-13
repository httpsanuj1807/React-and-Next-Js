import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// screen.get throws error
// screen.query  
// screen.find  return promise
// by default exact is true

describe('Greeting Component', () => {

    test('renders Hello World as a text', () => {

        // Arrange
        render(<Greeting />);  // pass jsx code only
    
        // Act
        // ...nothing for this test
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
    
        expect(helloWorldElement).toBeInTheDocument();
    
    
    });

    test('renders "good to see" if the button is NOT clicked', () => {

        // Arrange
        render(<Greeting />);  // pass jsx code only
    
        // Act
        // ...nothing for this test
    
        // Assert
        const outputElement = screen.getByText('Its good to see you.');
    
        expect(outputElement).toBeInTheDocument();
    
    
    });

    test('renders "Text is changed." if the button is clicked', () => {

        // Arrange
        render(<Greeting />);  // pass jsx code only
    
        // Act
        
        // first we have to select that button here
        const buttonElement = screen.getByRole('button');  // it will select the button on the screen. We have only one button thats why it worked, but we have to other if we have more buttons.

        // now we have to do user event, so import from library
        userEvent.click(buttonElement);

    
        // Assert
        const outputElement = screen.getByText('Text is changed.');
        expect(outputElement).toBeInTheDocument();
    
    
    });

    test('removes "Its good to see you." if the button is clicked', () => {

        // Arrange
        render(<Greeting />);  // pass jsx code only
    
        // Act
        
        // first we have to select that button here
        const buttonElement = screen.getByRole('button');  // it will select the button on the screen. We have only one button thats why it worked, but we have to other if we have more buttons.

        // now we have to do user event, so import from library
        userEvent.click(buttonElement);

    
        // Assert
        const outputElement = screen.queryByText('Its good to see you.');
        expect(outputElement).toBeNull();
    
    
    });

})