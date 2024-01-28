

function Houses({homesStateBridge}) {
   return (
    <div className="products">
        {homesStateBridge.map( element => {
            const{id, name, searchTerm, price, image} = element;
            return (
                <div key={id} className="product-card">

                <div>
                <img src={image} alt="house" width="350px" height="250px"/>
                </div>

                <div className="product-info">
                 <p>{name}</p>
                 
                <div className="containerBox">
                 {searchTerm.map( term => (
                    <div key={term} className="term">
                     {term}
                    </div>
                 ))}
                </div>

                 <p>{price}</p>

                </div>

                </div>
            )
        })}
    </div>
   )
}

export default Houses;