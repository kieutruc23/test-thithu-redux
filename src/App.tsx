import { Routes, Route } from "react-router-dom"
import Table from "./component/table"
import AddProductComponet from "./component/addProduct"
import UpdateProductComponent from "./component/updateProduct"




function App() {
  return (

    <div>
      <Routes>
        <Route path="/" >
          <Route index element={<Table />} />
          <Route path="/add" element={<AddProductComponet />} />
          <Route path="/edit">
            <Route path=":id" element={<UpdateProductComponent />} />
          </Route>
        </Route>

      </Routes>
    </div>

  )
}

export default App
