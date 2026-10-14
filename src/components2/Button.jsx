function Button({children, variant= "primary",className="",...props}){

    const style = {
        primary: "bg-blue-600 text-white",
        danger: "bg-red-600 text-white",
        secondary: "bg-gray-200 text-black",
    }

    return (
        <button 
        className={`${style[variant]} px-4 py-2 rounded  cursor-pointer ${className}`}
        {...props}
        >
            {children}
        </button>
    )
}

export default  Button;