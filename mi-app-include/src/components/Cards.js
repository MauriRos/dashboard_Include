import React from "react"
import LastProduct from "../componentes/LastProduct"
import Card from "../components/Card"
function Cards() {
    return (
        <div className="container d-flex  justify-content-*-between align-item-center">
            <div className="row">
                <div className="col-md-4">
                    <LastProduct />
                </div>
                <div className="col-md-8">
                    <Card />
                    <Card />
                </div>
                
                    
            </div>
        </div>
    )
}

export default Cards