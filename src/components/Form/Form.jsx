import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';

function Form() {
  return (
    <div className="form-box">
      <form>
        <div className="form-box__container">
          <input type="text" name="" required className="form-box__input"/>
          <label className="form-box__label">Username</label>
        </div>
        <div className="form-box__container">
          <input type="password" name="" required className="form-box__input"/>
          <label className="form-box__label">password</label>
        </div>
        <SubmitButton className="form-box__button-submit" value="Submit"/>
      </form>
      
    </div>
  );
}

export default Form;
