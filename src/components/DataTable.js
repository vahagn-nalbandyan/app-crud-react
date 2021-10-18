import React, { useEffect, useState, useRef } from "react";
import '../styles/data-table.css';

import dataJSON from '../data/users.json';
import secondDataJSON from '../data/users2.json';

const DataTable = ({ newUser }) => {
    const [usersList, setUsersList] = useState(dataJSON);  
    const [currentList, setCurrentList] = useState('USERS LIST 1');
    
    useEffect(() => {
        if(newUser.first_name) {
            setUsersList(oldArr => [...oldArr, newUser])
        }
    }, [newUser]);

    const deleteRow = btn => {
        let row = btn.closest('tr');        
        row.remove();
      }

    const onDeleteClick = (e) => {
        if(window.confirm('Լավ ես մտածել?')) {
            alert('Դու գիտես...')
            deleteRow(e.target);
        }        
    }
    
    const editRow = (btn) => {
        let row = btn.closest('tr').children;
        btn.innerText = btn.innerText === 'EDIT' ? 'SAVE' : 'EDIT';

        for(let i = 0; i < row.length; i++) {
            if(row[i].classList.contains('editable')) {
                row[i].setAttribute('contentEditable', true);
            }
            if(btn.innerText === 'EDIT') {
                row[i].setAttribute('contentEditable', false);
            }
        }              
    }            

    const onEditClick = (e) => {
        editRow(e.target);
    }

    return(
        <div className='data-container'>
            <h2 className='data-container-title'>{currentList}</h2>
            <button onClick={()=>{setUsersList(dataJSON); setCurrentList('USERS LIST 1')}} className='switch-list'>LIST 1</button>
            <button onClick={()=>{setUsersList(secondDataJSON); setCurrentList('USERS LIST 2')}} className='switch-list'>LIST 2</button>
            <div className='table-container'>
                <table>
                <thead>
                  <tr>
                    <th>USER ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                {usersList.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{item.id || ++index}</td>
                            <td className='editable'>{item.first_name}</td>
                            <td className='editable'>{item.last_name}</td>
                            <td className='editable'>{item.email}</td>
                            <td className='editable'>{item.gender}</td>
                            <td>
                                <button id='delete-button' onClick={onDeleteClick}>DELETE</button>
                                <button onClick={onEditClick}>EDIT</button>
                            </td>
                        </tr>    
                    )
                })}
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default DataTable;