import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import Houses from './Houses';


function Home () {

    const [homes, setHomes] = useState(data);
    

    return (
        <div>
            <div className='cont'>
            <h1>Move-in ready homes</h1>
            </div>

            <Buttons data={data} setHomes={setHomes} setStateHomes={()=> setHomes(data)}/>
            <Houses homesStateBridge={homes}/>
            
        </div>
    )
}

export default Home;