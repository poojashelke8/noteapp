import { render,screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Describe greet',()=>{test('Greet renders correctly',()=>{
    render(<Greet/>)
    const testelement = screen.getByText("Hello")
    expect(testelement).toBeInTheDocument()
})

describe('nested describe',()=>{test('Greet render a name',()=>{
    render(<Greet name="Pooja" Message="Welcome"/>)
    const testelement = screen.getByText("Hello Pooja Welcome")
    expect(testelement).toBeInTheDocument()
})})})