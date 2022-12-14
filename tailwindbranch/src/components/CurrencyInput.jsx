import React from 'react'

const CurrencyInput = () => {
    const [value, setValue] = useState(''); // Use state to store the input value
  
    // Format the input value as a currency
    const handleChange = (event) => {
      const inputValue = event.target.value;
      const formattedValue = inputValue.replace(/[^0-9.]/g, '') // Remove any non-numeric or decimal characters
        .replace(/(\..*)\./g, '$1') // Remove any consecutive decimal points
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); // Add a comma after every third digit
        setValue(`$ ${formattedValue}`);
    };
  
    return (
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    );
  };

export default CurrencyInput