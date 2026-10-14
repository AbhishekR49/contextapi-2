function Card({ children }) {
    return (
        <div className="border flex flex-col gap-4 rounded p-4 shadow-md">
            {children}
        </div>
    );
}

export default Card;