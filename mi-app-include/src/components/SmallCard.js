import React from "react";
import Users from '../componentes/UsersTotal';
import ProductsTotal from '../componentes/ProductsTotal';
import CategoriesTotal from '../componentes/CategoriesTotal';

function SmallCard() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100 bg-transparent">
                    
                        <div class="card-body">
                            <h5>Total de usuarios registrados</h5>
                            <h4 className="text-center">
                                <Users />
                            </h4>
                        </div>
                        <div className="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 bg-transparent">
                    
                        <div class="card-body">
                            <h5>Total de productos cargados</h5>
                            <h4 className="text-center">
                                <ProductsTotal />
                            </h4>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 bg-transparent">
                    
                        <div class="card-body">
                            <h5>Total de categorias de productos</h5>
                            <h4 className="text-center">
                                <CategoriesTotal />
                            </h4>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCard