import { render,screen } from "@testing-library/react"
import Header from "./Headers"


test('Header Checking',()=>{
    render(<Header/>)
    const testelement = screen.getByText(/Notes app/i)
    expect(testelement).toBeInTheDocument()
})