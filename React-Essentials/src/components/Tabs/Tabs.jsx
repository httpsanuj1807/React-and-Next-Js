
function Tabs({children, button, containerType = "menu"}){
    const ButtonContainer = containerType;
    return (
        <>
            <ButtonContainer>
                {button}
            </ButtonContainer>
        {children}
        </>
    )

}
export default Tabs;