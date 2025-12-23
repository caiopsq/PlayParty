import React from 'react';
import ProductDetails from '../Product';
import SideMenu from '../SideMenu';
import {Header} from '../Header';
import locationFinder from '../../functions/Location';

export default function Sandbox() {
    return (
        <div >
            {/* <SideMenu /> */}
            {/* <ProductDetails id={2} /> */}
            <div>
                <button onClick={locationFinder}>Get Location</button>
            </div>
        </div>
    )
};