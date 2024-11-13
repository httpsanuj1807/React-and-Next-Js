function Section({children,text, ...props}){
    return(
        <section {...props}>
            <h2>{text}</h2>
            {children}
        </section>
    );
}

export default Section;