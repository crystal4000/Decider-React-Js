import { useContext, useEffect } from 'react';
import {MyContext} from '../context'

const Result = ()=> {


    const context = useContext(MyContext);


    useEffect(() =>{
        context.result()

    },[])

    return(
        <div>
           <h3>Your answer is:</h3>
           <div className="viewer">
               {context.state.result}
           </div>

           <div className="animate__animated animate__bounceIn animate__delay-1s">
              <hr/>
              <button className="btn" onClick={context.reset}>Start Over</button>
              <button className="btn" onClick={context.result}>Decide again</button>
          </div>
        </div>
    )
}

export default Result;