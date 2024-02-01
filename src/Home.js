import { useState } from 'react'; 
import { data } from './data';
import Buttons from './Buttons';
import Houses from './Houses';

function Home () {

   
    const[homes, setHomes] = useState(data);

    return (
        <div>
        <div className='cont'>
            <h1>Ready to move-in houses</h1>
        </div>

         <Buttons setHomesBridge={setHomes} dataBridge={data}/>
         <Houses bridgeToHouses={homes}/>
            
        </div>
    )
}

export default Home;