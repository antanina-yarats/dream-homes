function Buttons({ setHomesBridge, dataBridge}) {

 const filteredHomes = (searchTerm) => {
  const newArray = dataBridge.filter(element => element.searchTerm.includes(searchTerm));
  const result = setHomesBridge(newArray);
 }
      
    return (
      <div className="cont">
      <button className="change" onClick={()=>setHomesBridge(dataBridge)}>All homes</button>
      <button className="change" onClick={()=>filteredHomes("small")}>Small </button>
      <button className="change" onClick={()=>filteredHomes('medium')}>Medium</button>
      <button className="change" onClick={()=>filteredHomes('large')}>Large</button>
      <button className="change" onClick={()=>filteredHomes('modern')}>Modern</button>
      <button className="change" onClick={()=>filteredHomes('traditional')}>Traditional</button>
      <button className="change" onClick={()=>filteredHomes('affordable')}>Affordable</button>
      <button className="change" onClick={()=>filteredHomes('mid-range')}>Mid-range</button>
      <button className="change" onClick={()=>filteredHomes('luxury')}>Luxury</button>
      <button className="change" onClick={()=>filteredHomes('best-seller')}>Best Seller</button>
  </div>
    )
}

export default Buttons;