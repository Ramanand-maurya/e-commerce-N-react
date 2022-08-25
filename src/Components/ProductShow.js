import { React,useEffect, useState } from "react";
import { API } from "../constants";
import axios from "axios";
export default function ProductShow(){
    const [productsAll, setProductsAll] = useState([]);
    const [Category, setCategory] = useState("womens");
    useEffect(() => {
        async function fetchProducts() {
          const response = await axios.get(`${API}/products/${Category}`);
          setProductsAll(response.data.products);
          console.log(response);
        }
        fetchProducts();
      }, [Category]);
      const onloadCategory = (category) => {
        setCategory(category);
      };
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h1 onClick={() => onloadCategory("mens")}>hello</h1>
                    </div>
                </div>
                <div className="row" >
                    {
                    productsAll.map((product,index) => (
                            <div key={index} className="col-3 mb-5 text-center">
                            <div className="cardMain">
                                <div className="image-product">
                                    <img src={product.image} alt={product.name} />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}