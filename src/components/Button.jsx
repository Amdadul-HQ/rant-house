
const Button = ({text,className}) => {
    return (
        <button className={`${className} text-xl font-medium px-8 py-2 rounded-md`}>
            {text}
        </button>
    );
};

Button.prototype={
    text: String.isRequired,
    className: String,
}
export default Button;