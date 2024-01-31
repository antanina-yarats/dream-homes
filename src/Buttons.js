

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
            <button className="change"onClick={() => filteredHomes("small")}>Small </button>
            <button className="change"onClick={() => filteredHomes("medium")}>Medium</button>
            <button className="change"onClick={() => filteredHomes("large")}>Large</button>
            <button className="change"onClick={() => filteredHomes("modern")}>Modern</button>
            <button className="change"onClick={() => filteredHomes("traditional")}>Traditional</button>
            <button className="change"onClick={() => filteredHomes("affordable")}>Affordable</button>
            <button className="change"onClick={() => filteredHomes("mid-range")}>Mid-range</button>
            <button className="change"onClick={() => filteredHomes("luxury")}>Luxury</button>
        </div>
    )
}

export default Buttons;