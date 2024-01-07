import React from 'react';
import { Categories } from '../../Datas';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../MyCss/DisplayProduct.css';

export default function DisplayProduct() {

    const { state } = useLocation();
    const product = state.data;
    let navigate = useNavigate();

    const AddToCart = () => {
        var fromLocal = JSON.parse(localStorage.getItem("Cart"));

        if (fromLocal) {
            var count = fromLocal.filter(ele => ele.ProductId === product.ProductId);
            if (count == 0) {
                product.quantity = 1;
                fromLocal.push(product);
                localStorage.setItem("Cart", JSON.stringify(fromLocal));
            }
        } else {
            product.quantity = 1;
            localStorage.setItem("Cart", JSON.stringify([product]));
        }
    }
    // return "fbshfvs";
    return (
        <>

            <div class="container mt-4">
                <div class="product-container container">
                    <img src={product.ImageUrl} alt="Product Image" class="product-image" style={{ maxWidth: '40%', height: "auto" }} />

                    <div class="product-description">
                        <h2><b>{product.Name}</b></h2>
                        <h3><b>Price:</b> Rs {product.Cost}</h3>



                        <h3><b>Category:</b> {Categories[product.CategoryId]}</h3>

                        {/* <form method="post" action="@Url.Action(" AddToCart", "Order")">
                            <button type="submit" class="add-to-cart-button" id="addToCartButton" name="productId" value="@Model.ProductId">Add to Cart</button>
                        </form> */}

                        <button class="add-to-cart-button m-1" onClick={AddToCart}>Add To Cart</button>
                        <button class="add-to-cart-button m-2" onClick={()=>navigate('/cartView')}>Go to Cart</button>

                        {/* <form method="get" action="@Url.Action(" CartView", "Order")">
                        <button type="submit" class="add-to-cart-button">Go to Cart</button>
                    </form> */}
                    </div>
                </div>
            </div >

        </>
    )
}
