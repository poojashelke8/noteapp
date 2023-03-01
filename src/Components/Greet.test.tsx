import { render,screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Describe greet',()=>{test('Greet renders correctly',()=>{
    render(<Greet/>)
    const testelement = screen.getByText("Hello")
    expect(testelement).toBeInTheDocument()
})

describe('nested describe',()=>{test('Greet render a name',()=>{
    render(<Greet name="Pooja"/>)
    const testelement = screen.getByText("Hello Pooja")
    expect(testelement).toBeInTheDocument()
})})})