import Child from './Child'
import { ClassComp, FunctionComp, ArrowFunctionComp } from './Components'

function Hello() {
  return <h1>Hello</h1>
}

function App() {

  return (
    <>
      <Hello/>
      <h2>world</h2>
      <Child />
      <ClassComp />
      <FunctionComp />
      <ArrowFunctionComp />
    </> 
  )
}

export default App
