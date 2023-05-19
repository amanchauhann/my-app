const Input = ({id, label, type, placeholder}) => {
    return (
        <>
            <label for={id}>{label}</label>
            <input className="auth-input" type={type} placeholder={placeholder} id={id}/>
        </>
    )
}
export default Input