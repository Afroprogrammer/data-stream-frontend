import React from 'react';
import ResourceDisplay from './ResourceDisplay';

function Display({serviceSelected, resources}:any) {
    return (
        <div>
            {resources.map((resource :any) => (
                <ResourceDisplay serviceSelected={serviceSelected} resource={resource}/>
            ))}
        </div>
    );
}

export default Display;
