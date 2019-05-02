import React from 'react'


const BoilingVeredict = (props) => {
    return props.celsius >= 100 ? (<p>Water would boil</p>) : (<p>Water would not boil</p>)

}

export default BoilingVeredict
