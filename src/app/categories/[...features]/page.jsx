import React from 'react';

const CategoriesDetailsPage = ({params}) => {
    console.log(params)
    if(params.features.length==2){
        return params.features[1]
    }
    if(params.features[2]){
        return params.features[2]
    }
    return (
        <div>
            this is the first step.
        </div>
    );
};

export default CategoriesDetailsPage;