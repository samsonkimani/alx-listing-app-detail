import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import Pill from "@/components/Pill";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Beachfront", "Mountain View"];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white h-80 flex items-center justify-center" style={{ backgroundImage: `url('/hero.jpg')` }}>
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg mt-2">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto my-6 px-4 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listings */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-blue-600 font-semibold">${property.price}</span>
                <span className="text-yellow-500 text-sm">⭐ {property.rating}</span>
              </div>
              {property.discount && (
                <div className="text-xs text-red-500 mt-1">-{property.discount}% OFF</div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
