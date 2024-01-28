

function Buttons({data, setHomes, setStateHomes}) {

    const filteredHomes = searchTerm => {
      const filteredResult = [];
      data.forEach(item => {
       item.searchTerm.forEach(term => {
        if(term === searchTerm) {
            filteredResult.push(item);
            setHomes(filteredResult);
        }
       })
      })
    }
    return (
        <div className="cont">
            <button className="change"onClick={()=> setStateHomes(data)} >All homes</button>
            <button className="change"onClick={() => filteredHomes("Small")}>Small </button>
            <button className="change"onClick={() => filteredHomes("Medium")}>Medium</button>
            <button className="change"onClick={() => filteredHomes("Large")}>Large</button>
            <button className="change"onClick={() => filteredHomes("Modern")}>Modern</button>
            <button className="change"onClick={() => filteredHomes("Traditional")}>Traditional</button>
            <button className="change"onClick={() => filteredHomes("Affordable")}>Affordable</button>
            <button className="change"onClick={() => filteredHomes("Mid-range")}>Mid-range</button>
            <button className="change"onClick={() => filteredHomes("Luxury")}>Luxury</button>
        </div>
    )
}

export default Buttons;