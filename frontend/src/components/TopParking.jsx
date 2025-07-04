import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';

const Topparking = () => {
  const navigate = useNavigate();
  const { parking } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Parking Slots to Book</h1>
      <p className="sm:w-1/2 text-center text-sm">
        Explore and book the best available parking slots in your city in
        real-time.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {parking.slice(0, 15).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/booked/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="bg-blue-50 w-full h-44 object-cover"
              src={item.image}
              alt={item.location}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm mb-1">
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.status === 'Available'
                      ? 'bg-green-500'
                      : 'bg-yellow-500'
                  }`}
                ></span>
                <p
                  className={`${
                    item.status === 'Available'
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }`}
                >
                  {item.status}
                </p>
              </div>
              <p className="text-gray-900 text-lg font-medium">
                {item.location}
              </p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/Parking');
          scrollTo(0, 0);
        }}
        className="bg-blue-100 text-gray-800 text-sm px-12 py-3 mt-10 rounded-full hover:bg-blue-200 transition-all"
      >
        more
      </button>
    </div>
  );
};

export default Topparking;
