import React from 'react';
const TaxesFees = props => {
    return (
        <div className="p-3 mb-2 bg-light text-dark">
            <p>Est. tax fee Based on State</p>
            <p><span>$</span> <span>{props.taxes}</span></p>
        </div>
    )
}

export default TaxesFees;