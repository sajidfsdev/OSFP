import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const Testing = props => {

    const returnItems = () => {
        const arr = [];
        for (let i = 0; i <= 100; i++) {
            arr.push("The Elem" + i);
        }
        return arr.map((elem, index) => (
            <div key={index}>{elem}</div>
        ));
    }

    return (
        <div style={{
            width: '400px',
            height: '100px',
            border: '1px solid'
        }}>
            <ScrollMenu
                data={returnItems()}
            />
        </div>
    );

}//................Testing ends

export default Testing;