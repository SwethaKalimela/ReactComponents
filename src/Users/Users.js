import React from 'react';

const Users = ( props ) => { {/*This is functional component created using => arrow function else we can simply write function Users(props){} */}
    return(                    
        <div>
           Name: {props.name}- Age: {props.age}
        </div>
    );
};

export default Users;