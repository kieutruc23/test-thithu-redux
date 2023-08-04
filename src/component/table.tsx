
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { deleteProduct, getAllProduct } from '../action/Product'
import { Link } from 'react-router-dom'
const Table = () => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state) => state.products)
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])
    const handelDelete = (id: any) => {
        if (confirm("bố mày hỏi lại lần cuối là có muốn xoá không")) {
            dispatch(deleteProduct(id))
        }

    }
    return (
        <div>

            <button><Link to={"/add"}>thêm san pham</Link></button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item: any, index: any) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item?.name}</td>
                            <td>{item?.price}</td>
                            <td><button onClick={() => handelDelete(item.id)}>xoa</button></td>
                            <td><button><Link to={`/edit/${item.id}`}>suwa</Link></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Table