import { screen, render } from "@testing-library/react";
import AsyncFunc from "./Async";

describe('Async Component', () => {

    test('is rendering posts if request succeed', async() =>{

        // Arrange
        render(<AsyncFunc />);

        // Assert
        // select the listitems

        const listItemsElements = await screen.findAllByRole('listitem');
        
        expect(listItemsElements).not.toHaveLength(0);

    })

})