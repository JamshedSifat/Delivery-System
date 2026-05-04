import React, { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import L from 'leaflet';

// Fix for default marker icons (copy this exactly)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);
    const [searchValue, setSearchValue] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    
    const handleSearch = (e) => {
        e.preventDefault();
        const location = searchValue;
        
        if (!location.trim()) return;
        
        const district = serviceCenters.find(c => 
            c.district.toLowerCase().includes(location.toLowerCase())
        );

        if (district) {
            const coord = [district.latitude, district.longitude];
            setSelectedDistrict(district);
            mapRef.current.flyTo(coord, 12);
        } else {
            alert('District not found!');
        }
    }

    const resetMap = () => {
        mapRef.current.flyTo(position, 8);
        setSelectedDistrict(null);
        setSearchValue('');
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-green-500 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        We're Available in 64 Districts
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100">
                        Find your nearest service center across Bangladesh
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 -mt-8">
                {/* Search Box Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <input 
                                type="text" 
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search by district name (e.g., Dhaka, Chittagong)" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-200"
                        >
                            Search Location
                        </button>
                        <button 
                            type="button"
                            onClick={resetMap}
                            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                        >
                            Reset Map
                        </button>
                    </form>
                    
                    {/* Show selected district info */}
                    {selectedDistrict && (
                        <div className="mt-4 p-3 bg-green-500 rounded-lg border border-blue-200">
                            <p className="text-blue-800">
                                <strong>📍 Selected:</strong> {selectedDistrict.district}
                            </p>
                        </div>
                    )}
                </div>

                {/* Map Container */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                    <MapContainer
                        center={position}
                        zoom={8}
                        scrollWheelZoom={true}
                        className="h-[500px] w-full"
                        ref={mapRef}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                        {serviceCenters.map((center, index) => (
                            <Marker
                                key={index}
                                position={[center.latitude, center.longitude]}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedDistrict(center);
                                    }
                                }}
                            >
                                <Popup>
                                    <div className="p-2">
                                        <h3 className="font-bold text-lg">{center.district}</h3>
                                        <hr className="my-2" />
                                        <p className="text-sm">
                                            <strong>Service Areas:</strong><br />
                                            {center.covered_area.join(', ')}
                                        </p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-green-500 mb-2">
                            {serviceCenters.length}
                        </div>
                        <div className="text-gray-600 font-semibold">Total Districts</div>
                        <div className="text-sm text-gray-500">Full nationwide coverage</div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-green-500 mb-2">
                            {serviceCenters.reduce((sum, center) => sum + center.covered_area.length, 0)}
                        </div>
                        <div className="text-gray-600 font-semibold">Service Areas</div>
                        <div className="text-sm text-gray-500">Coverage zones</div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
                        <div className="text-gray-600 font-semibold">Support Available</div>
                        <div className="text-sm text-gray-500">Round the clock assistance</div>
                    </div>
                </div>

                {/* Quick Links - District List */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">All Service Districts</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        {serviceCenters.slice(0, 12).map((center, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSearchValue(center.district);
                                    const coord = [center.latitude, center.longitude];
                                    setSelectedDistrict(center);
                                    mapRef.current.flyTo(coord, 12);
                                }}
                                className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-green-500 rounded transition duration-200"
                            >
                                {center.district}
                            </button>
                        ))}
                        {serviceCenters.length > 12 && (
                            <div className="px-3 py-2 text-sm text-gray-500">
                                +{serviceCenters.length - 12} more districts
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coverage;