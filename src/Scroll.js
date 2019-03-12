import React from 'react';

let Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;