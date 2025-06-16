import Product from "./Product.jsx";

function ProductTab(){
    let styles = {
        display :"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems :"center"

    };

    return(
        <div style={styles}>
        
            <Product title="Logitech MX Master 35" idx={0} />
            <br/>

            <Product title="Apple pencil (2nd Gen)" idx={1}  />
            <br/>

            <Product title="Zeb-Transformer" idx={2}  />
            <br/>

            <Product title="Portronics Toad 23" idx={3}  />
        </div>
    );
}


export default ProductTab;