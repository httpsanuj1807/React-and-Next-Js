function TabContent({children, onSelect , isActive}){
    return(
        <button className={isActive ? "active" : undefined} onClick={() => onSelect(children.toLowerCase())}>{children}</button>
    );
}

export default TabContent;