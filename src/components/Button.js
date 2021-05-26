import "../styles/Button.scss";

const Button = ({onClick, type, btnStyle, btnSize, children, className}) => {
    const STYLES = ['btn-primary--light', 'btn-primary--dark', 'btn-primary--red', 'btn-primary--blue', 'btn-primary--yellow', 'btn-outline--light', 'btn-outline--dark', 'btn-outline--red', 'btn-outline--blue', 'btn-outline--yellow'];
    const SIZES = ['btn--medium', 'btn--large', 'btn--mobile'];

    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

    return (
        <button className={`btn ${checkBtnStyle} ${checkBtnSize} ${className}`} onClick={onClick} type={type}>{children}</button>
    );
}

export default Button;