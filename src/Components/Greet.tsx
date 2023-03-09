type greetprops= {
    name?:string
    Message?:string
}

const Greet = (props:greetprops)=>{
    return(
        <div>Hello {props.name} {props.Message}</div>

    )
}

export default Greet