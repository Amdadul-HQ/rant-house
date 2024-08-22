
const Button = ({text,className}) => {
    return (
        <button className={`${className}`}>
            {text}
        </button>
    );
};

Button.prototype={
    text: String.isRequired,
    className: String,
}
export default Button;