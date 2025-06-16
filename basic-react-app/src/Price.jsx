function Price({ oldPrice, newPrice }) {
    let oldstyles = {
        textDecorationLine: "line-through",
    }
    let newstyles = {
        fontWeight :"bold"
    }
    let styles={
        backgroundColor:"#e0c367",
        width:"200px",
        height: "40px",
        borderBottomLeftRadius : "13px",
        borderBottomRightRadius : "13px",
        // borderTopLeftRadius : "14px"
    }
    return (
        <div style={styles}>
            <span style={oldstyles} > {oldPrice}</span>

            &nbsp;
            &nbsp;

            <span style={newstyles} > {newPrice}</span>
        </div>
    );
}

export default Price;
