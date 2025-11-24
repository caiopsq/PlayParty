import React from 'react';
import ProductDetails from '../Product';
import SideMenu from '../SideMenu';

export default function Sandbox() {
    return (
        <div style={{justifyContent: ""}} className="flex">
            <SideMenu />
            {/* <ProductDetails id={2} /> */}
        </div>
    )
};