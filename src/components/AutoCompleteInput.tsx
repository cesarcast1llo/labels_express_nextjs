import React, { useState } from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

const libraries: ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[] = ['places'];

type AutoCompleteInputProps = {
    placeholder: string;
    name: string;
};

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({ placeholder, name }) => {
    const [searchResult, setSearchResult] = useState<any>(null);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY!,
        libraries: libraries,
    });

    function onLoad(autocomplete: any) {
        setSearchResult(autocomplete);
    }

    function onPlaceChanged() {
        if (searchResult != null) {
            const place = searchResult.getPlace();
            const formattedAddress = place.formatted_address;
            console.log(`${placeholder}: ${formattedAddress}`);
        } else {
            alert('Please enter text');
        }
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <Autocomplete className="onCompleteAPI" onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
            <input type="text" placeholder={placeholder} name={name} required />
        </Autocomplete>
    );
};

export default AutoCompleteInput;
