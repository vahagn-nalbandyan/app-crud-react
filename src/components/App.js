import React from "react";
import { useState } from "react/cjs/react.development";
import "../styles/app.css";

import ActionBox from "./ActionBox";
import DataTable from "./DataTable";

const App = () => {
    const [newUser, setNewUser] = useState({});

    return(        
        <div className='app-wrapper'>
            <h1 className='app-title'>
                React CRUD App
            </h1>
            <div className='app-content'>
                <div className='create-edit left-box'>
                    <ActionBox setNewUser={setNewUser} />
                </div>
                <div className='data-list right-box'>
                    <DataTable newUser={newUser} />
                </div>
            </div>
        </div>
    );
}

export default App;