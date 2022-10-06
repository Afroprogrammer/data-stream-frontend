import React from 'react';
import AirtimeResourceDisplay from "./AirtimeResourceDisplay";

const resources = [
    {
        title: 'Airtime',
        products: [
            {
                airtimeProvider: '9mobile Airtime',
                imageUrl:  '9mobile.svg',
            },
            {
                airtimeProvider: 'Airtel Airtime',
                imageUrl:  'airtel.svg',
            },
            {
                airtimeProvider: 'Glo Airtime',
                imageUrl:  'glo.png',
            },
            {
                airtimeProvider: 'MTN Airtime',
                imageUrl:  'mtn.svg',
            }

        ]
    },

]

function AirtimeDisplay() {
    return (
        <div>
            {resources.map((resource) => (
                <AirtimeResourceDisplay resource={resource}/>

            ))}
        </div>
    );
}

export default AirtimeDisplay;
