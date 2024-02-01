import './App.css';

function Houses({bridgeToHouses}) {
    return (
       <div className="products">
        {bridgeToHouses.map(element => {
          const{id, name, searchTerm, price, image} = element;

          return (
            <div key={id} className="product-card" >
              
              <div>
                <img src={image} alt="house" width="350px" height="250px"/>
              </div>

              <div className="product-info">

                <p>{name}</p>
                <p>{price}</p>

                <div className='termContainerBox'>
                  {searchTerm.map(term => (
                    <div key={term} className="termContainer">
                      <p className='term'>{term}</p>
                    </div>
                  ))}
                </div>
                
              </div>  

            </div>
          )
        })}
       </div>
      
    )
    }
   
   export default Houses;