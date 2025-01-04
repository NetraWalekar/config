import './../Category/Category.css'
import config from './../utils/config.json'

function Category(){
    return(
        <div>
            <div className = "text">Shop By Style</div>
            <div className="gallery">
            <div><img src="https://www.lavieworld.com/cdn/shop/files/IMG_2054_460x.jpg?v=1734607941" alt="model holding bag" className="image"></img><figcaption className="caption" style={{fontFamily : config.theme.fontFamily}}>Sling Bag</figcaption></div>
            <div><img src="https://www.lavieworld.com/cdn/shop/files/IMG_2056_460x.jpg?v=1734608347" alt="model holding bag" className="image"></img><figcaption className="caption" style={{fontFamily : config.theme.fontFamily}}>Sling Bag</figcaption></div>
            <div><img src="https://www.lavieworld.com/cdn/shop/files/IMG_2051_460x.jpg?v=1734607941" alt="model holding bag" className="image"></img><figcaption className="caption" style={{fontFamily : config.theme.fontFamily}}>Sling Bag</figcaption></div>
            <div><img src="https://www.lavieworld.com/cdn/shop/files/IMG_2053_460x.jpg?v=1734607942" alt="bag" className="image"></img><figcaption className="caption" style={{fontFamily : config.theme.fontFamily}}>Sling Bag</figcaption></div>
            </div>
        </div>
    )
}

export default Category