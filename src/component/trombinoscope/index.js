import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Trombinoscope = (props) =>{

       
    const [trombinoscopeList, setTrombinoscope] = useState([])
    const axios = require('axios');

     /* Hugo-Jean EGU */
    useEffect( () => {
        axios.get('http://hp-api.herokuapp.com/api/characters')
        .then(res => {
            setTrombinoscope(res.data)
        })
        .catch(err => {
            console.log(err);
        })

    }, [])

    /* Adrien LEIB */
    // useEffect( async () => {
    //     const newTrombinoscope = await axios.get('http://hp-api.herokuapp.com/api/characters')
    //     setTrombinoscope(newTrombinoscope.data);

    // }, []
    // );


    
    return(
        <div>
                {trombinoscopeList.map((item) => (
                    <div key={item.name}>
                        <p>{item.name}</p> 
                        <img  width="200px" src={item.image}/>
                    </div>

                ))}
        </div>
    )
}

export default Trombinoscope