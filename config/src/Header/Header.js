import config from "../utils/config.json"
import './../Header/Header.css'

function Header() {
    return (
        <div>
            <div className="tagline" style={{ backgroundColor: config.theme.primaryColor, color: config.theme.secondaryColor }}>Additional 5% Off & Free Shipping On All Prepaid Orders.</div>
            <div className="Header">
                <div className="brandName">{config.brandName}</div>
                <div className="links">
                    <div className="text-link" style={{fontFamily : config.theme.fontFamily}}>New Arrivals</div>
                    <div className="text-link" style={{fontFamily : config.theme.fontFamily}}>Men</div>
                    <div className="text-link" style={{fontFamily : config.theme.fontFamily}}>Women</div>
                    <div className="text-link" style={{fontFamily : config.theme.fontFamily}}>Brand</div>
                </div>
                <div>
                <div className="text-link" style={{fontFamily : config.theme.fontFamily}}>Account</div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}


export default Header;