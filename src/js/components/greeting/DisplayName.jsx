import React from 'react';


const DisplayName = ({name, changeName})=> {
    return (
        <div>
            <div>Hello! {{name}} <span>Welcome to React World !</span> </div>
            <Button onClick={changeName}>Change Name</Button>
        </div>
    
    );
}

export default DisplayName;