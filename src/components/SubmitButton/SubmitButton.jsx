import React from 'react';

function SubmitButton({className, value}) {
  return (
    <button type="submit" className={className}>
      {value}
    </button>
  );
}

export default SubmitButton;
