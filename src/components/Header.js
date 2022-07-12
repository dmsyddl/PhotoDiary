const Header = ({headDate, headWeather}) => {
    return (
        <div className="header">
            <div className="date">{headDate}</div>
            <div className="weather">{headWeather}</div>
        </div>
    )
};

export default Header;