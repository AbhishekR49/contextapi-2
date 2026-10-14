function Input({type='text',value, onChange, placeholder}){
    return(
        <input 
        className='border rounded '
        value={value} onChange={onChange} type={type} placeholder={placeholder} />
          
    )
}

export default Input;