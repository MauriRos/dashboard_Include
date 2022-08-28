import React from "react";
import Users from '../componentes/UsersTotal';
import ProductsTotal from '../componentes/ProductsTotal';
import CategoriesTotal from '../componentes/CategoriesTotal';

function SmallCard() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    
                        <div class="card-body">
                            <Users />
                        </div>
                        <div className="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    
                        <div class="card-body">
                            <ProductsTotal />
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    
                        <div class="card-body">
                            <CategoriesTotal/>
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