import "./product.css";
import Price from "./Price.jsx";

function Product({title, idx}){
    let oldPrices=["12,495", "11,900", "34,000","70,000"];
    let newPrices=["11,999", "9,199", "30,003" ,"50,000"];
    let description = [
        ["8,000 DPI ", "5 Programmble buttons"],
        ["Initutive touch surface ","Designed for I pad pro"],
        ["Designed for I pad Pro","Intutive Surface"],
        ["Wireless Mouse 2.4 GHz","optical orientation"]
    ];
    return(
        <div className="Product">

        <h4>{title}</h4>
        <h4>{description[idx][0]}</h4>
        <h4>{description[idx][1]}</h4>
        <Price oldPrice={oldPrices[idx]}   newPrice={newPrices[idx]}/>

        </div>
    );
}


export default Product;