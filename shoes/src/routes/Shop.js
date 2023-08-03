import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ShopCard from '../ShopCard';

function Shop(){
    return(
        <>
        <div className='shop_bg'></div>
        <div className="content">
            <div className='left_content'>왼쪽 사이드바
                <div>나이키</div>
                <div>뉴발란스</div>
                <div>아디다스</div>
                <div>컨버스</div>
            </div>
            <div className='right_content'><ShopCard></ShopCard></div>

        </div>
        </>
    )
}


export default Shop;