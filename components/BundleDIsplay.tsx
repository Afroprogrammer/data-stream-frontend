import React from 'react';
import PropTypes from 'prop-types';
import AirtimeResourceDisplay from "./ResourceDisplay";
import BundleResourceDisplay from "./BundleResourceDisplay";

const resources = [
    {

        title: 'Data',
        products: [
            {
                airtimeProvider: '9mobile Data',
                imageUrl:  '9mobile.svg',
            },
            {
                airtimeProvider: 'Airtel Data',
                imageUrl:  'airtel.svg',
            },
            {
                airtimeProvider: 'Glo Data',
                imageUrl:  'glo.png',
            },
            {
                airtimeProvider: 'MTN Data',
                imageUrl:  'mtn.svg',
            }


        ]
    }
]

function BundleDisplay() {
    return (
        <div>
            {resources.map((resource) => (
                <BundleResourceDisplay resource={resource}/>

            ))}
        </div>
    );
}

export default BundleDisplay;
