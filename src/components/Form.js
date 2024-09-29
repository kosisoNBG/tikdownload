import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setInputValue(text);
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    };

    const handleClear = () => {
        setInputValue('');
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

  return (
    <div style={{marginBottom: '20px'}}>
      <div className="input-group mb-3">
        <input type="text" className="form-control"  value={inputValue}
        onChange={handleChange}placeholder="Paste a Tiktok video URL Here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        

        {inputValue === '' ? (
                    <button onClick={handlePaste} className="btn btn-outline-secondary" type="button" id="button-addon2">Paste <i className='fa fa-clipboard'></i></button>
            ) : (
                
            <button onClick={handleClear} className="btn btn-outline-secondary" type="button" id="button-addon2">Clear <i className='fa fa-x'></i></button>
            )}
        </div>

        <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button">Download <i className='fa fa-download'></i></button>
        </div>
    </div>
  )
}

export default Form
