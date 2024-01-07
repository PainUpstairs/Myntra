import React, { useState } from 'react';
import '../MyCss/CartView.css'
import { Categories } from '../Datas';

export default function CartView() {

    let [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("Cart")));
    console.log("cartData:", cartData);

    let Remove = (id) => {

        console.log("id:",id);
        cartData = cartData.filter(item => item.ProductId !== id)
        localStorage.setItem("Cart", JSON.stringify(cartData));
        setCartData(cartData);
    }

    let IncreaseQuatity = (id) =>{
        var newCartData = cartData.map((item) =>
        item.ProductId === id ? { ...item , quantity: item.quantity + 1 } : item)
        console.log("newCartData:",newCartData);
        localStorage.setItem("Cart", JSON.stringify(newCartData));
        setCartData(newCartData);
    }

    let DecreaseQuantity = (id) =>{
        var newCartData = cartData.map((item) =>
        item.ProductId === id ? { ...item , quantity: item.quantity - 1 } : item)
        console.log("newCartData:",newCartData);
        localStorage.setItem("Cart", JSON.stringify(newCartData));
        setCartData(newCartData);
    }

    return (
        <>
            <div class="container mt-4">
                <h2>Your Shopping Cart</h2>
                {cartData && cartData.map((data, i) => {
                    var sum = 0;
                    // sum = sum + product.Cost;
                    return <div class="cart-item row">

                        <div class="col-md-1">
                            <img src={data.ImageUrl} style={{ height: "100px", width: "auto" }} alt="Product Image" class="product-image" />
                        </div>
                        <div class="col-md-11">
                            <table>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Size</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>{data.Name}</td>
                                    <td>{data.Cost}</td>

                                    <td>{Categories[data.CategoryId]}</td>
                                    <td>s</td>

                                    <td>
                                        {/* // <form method="post" action="@Url.Action("RemoveFromCart", "Order")">
                                    <button type="submit" name="id" class="remove-button" value="@product.ProductId">Remove</button>
                                    // </form> */}
                                        <button className="remove-button m-1" onClick={() => Remove(data.ProductId)}>Remove</button>
                                        <button className="remove-button m-1" onClick={()=>IncreaseQuatity(data.ProductId)}>+</button><button className="remove-button m-1" onClick={() => DecreaseQuantity(data.ProductId)}>-</button>
                                        {data.quantity}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                })}

                {cartData ?
                <div class="cart-subtotal mt-3">
                    <h3>Cart Subtotal: {cartData.map(ele => ele.quantity*ele.Cost).reduce((partialSum, a) => partialSum + a, 0)}</h3>
                </div>:null}

                {/* <div class="text-left mt-3">
        <form method="post" action="@Url.Action("PlaceOrder", "Order")">
            <input type="hidden" name="Amount" value="@sum" />
            <button class="place-order-button" onclick="PlaceOrder()">Place Order</button>
        </form> */}
            </div>
        </>
    )
}
