import React, {useState, useRef} from "react";

import '../styles/action-box.css';

const ActionBox = ({ setNewUser }) => {
    const [actionTitle, setActionTitle] = useState('Create User');
    const [submitButtonText, setSubmitButtonText] = useState('CREATE USER');
    const [cancelButtonText, setCancelButtonText] = useState('RESET FORM');

    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [genderValue, setGenderValue] = useState('');

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const genderRef = useRef();

    const addClassName = (className, element) => {
        element.classList.add(className);        
    }

    const removeClassName = (className, element) => {
        element.classList.remove(className)
    }

    const onFirstNameChange = e => {
        setFirstNameValue(e.target.value);
        if(firstNameRef.current.value) {
            removeClassName('invalid', firstNameRef.current)
        }
    }
    const onLastNameChange = e => {
        setLastNameValue(e.target.value);
        if(lastNameRef.current.value) {
            removeClassName('invalid', lastNameRef.current)
        }
    }
    const onEmailChange = e => {
        setEmailValue(e.target.value);
        if(emailRef.current.value) {
            removeClassName('invalid', emailRef.current)
        }
    }
    const onGenderChange = e => {
        setGenderValue(e.target.value);
        if(genderRef.current.value) {
            removeClassName('invalid', genderRef.current)
        }
    }

    const clearForm = () => {
        setFirstNameValue('');
        setLastNameValue('');
        setEmailValue('');
        setGenderValue('');
        removeClassName('invalid', firstNameRef.current);
        removeClassName('invalid', lastNameRef.current);
        removeClassName('invalid', emailRef.current);
        removeClassName('invalid', genderRef.current)
    }

    const onResetClick = (e) => {
        e.preventDefault();
        clearForm();
    }

    const onCreateClick = e => {
        e.preventDefault();
        if(firstNameValue && lastNameValue && emailValue && genderValue) {
            setNewUser(
                {
                    
                    first_name: firstNameValue,
                    last_name: lastNameValue,
                    email: emailValue,
                    gender: genderValue
                }
            );
            clearForm();            
        }   
        if(!firstNameValue) {
            addClassName('invalid', firstNameRef.current);                
        } 
        if(!lastNameValue) {
            addClassName('invalid', lastNameRef.current); 
        } 
        if(!emailValue) {
            addClassName('invalid', emailRef.current); 
        } 
        if(!genderValue) {
            addClassName('invalid', genderRef.current); 
        }
    }
    
    return(
        <div className='action-box'>
            <h2 className='action-title'>{actionTitle}</h2>
            <form className='action-box-form'>
                <label htmlFor='first-name'>FIRST NAME</label>
                <input ref={firstNameRef} type='text' value={firstNameValue} id='first-name' onChange={onFirstNameChange} />
                <label htmlFor='last-name'>LAST NAME</label>
                <input ref={lastNameRef} type='text' value={lastNameValue} id='last-name' onChange={onLastNameChange} />
                <label htmlFor='email'>EMAIL</label>
                <input ref={emailRef} type='text' value={emailValue} id='email' onChange={onEmailChange} />
                <label htmlFor='gender'>GENDER</label>
                <input ref={genderRef} type='text' value={genderValue} id='gender' onChange={onGenderChange} />
                <div className='button-box'>
                    <button onClick={onCreateClick}>{submitButtonText}</button>
                    <button onClick={onResetClick}>{cancelButtonText}</button>
                </div>
            </form>
        </div>
    )
}

export default ActionBox;