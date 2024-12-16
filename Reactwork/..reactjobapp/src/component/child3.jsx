import React from "react";

function Child3({child3data}){
    return (
        <div>child3
            Name:{child3data.Name}
            <br></br>
            Branch:{child3data.Branch}
            <br></br>
            Section:{child3data.Section}
        </div>
    )
}

export default Child3;