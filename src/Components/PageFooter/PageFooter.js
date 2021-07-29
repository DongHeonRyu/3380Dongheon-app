import React from 'react';

function PageFooter(props) {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p>&copy; Dongheon Ryu's Movie App</p>
        </div>
    );
}

export default PageFooter;