type greetprops= {
    name?:string
}

const Greet = (props:greetprops)=>{
    return(
        <div>Hello {props.name}</div>

    )
}

export default Greet