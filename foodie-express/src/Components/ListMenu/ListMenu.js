import React, { useState,useContext } from 'react'
import './ListMenu.css'
import CartProvider from '../../Store/CartProvider';
import CartContext from '../../Store/cart-context';

function ListMenu(props) {
    const [cart, setCart] = useState();
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0;

    const addHandler = (ele) => {
        console.log(ele)
        cartCtx.addItem({
            name:ele.dishName,
            id:ele.id,
            price:ele.price
        });
    }

    const deleteHandler = (ele) => {

    }


    return (
        <div className='listMenu-wrapper'>
            <h3>Menu Card of : {props.menuList.name} {props.menuList.address}</h3>
            <div className="listMenu-content">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col" style={{width:'5%'}}>#</th>
                        <th scope="col" style={{width:'20%'}}>Dish Name</th>
                        <th scope="col" style={{width:'10%'}}>Price</th>
                        <th scope="col" style={{width:'10%'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.menuList && props.menuList.menu.map((item,index)=>{
                            return(
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.menu}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button className='btn btnGrp btn-xs btn-success' onClick={()=>addHandler(item)}>Add</button>
                                        <button className='btn btnGrp btn-xs btn-danger' onClick={()=>deleteHandler(item)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="cart-items">

                </div>
            </div>
        </div>
    )
}

export default ListMenu