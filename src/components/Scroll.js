import React from 'react';

let Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '500px', border: 'solid 2px #4da6ff'}}>
            {props.children}
        </div>
    );
};

export default Scroll;