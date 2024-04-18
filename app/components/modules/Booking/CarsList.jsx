import Image from "next/image";

let cars;

const CarsList = () => {
  return (
    <ul className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(325px,1fr))] gap-5">
      {cars.map((car) => (
        <li
          key={car.id}
          className="p-6 flex flex-col justify-between rounded-2xl bg-white"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#242731]">{car.name}</h3>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(173,184,194,1)"
              >
                <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
              </svg>
            </button>
          </div>
          <span className="text-base text-[#72767C]">{car.bodyType}</span>
          <Image
            className="mx-auto my-4"
            src={car.image}
            alt={car.name}
            width={200}
            height={100}
          />
          <div className="flex items-center">
            <span className="mr-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="rgba(161,98,247,1)"
              >
                <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
              </svg>
              <b className="text-[#72767C]">{car.places}</b>
            </span>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="rgba(161,98,247,1)"
              >
                <path d="M6 4H21C21.5523 4 22 4.44772 22 5V12H20V6H6V9L1 5L6 1V4ZM18 20H3C2.44772 20 2 19.5523 2 19V12H4V18H18V15L23 19L18 23V20Z"></path>
              </svg>
            </button>
            <b className="ml-auto">
              ${car.price}
              <span className="text-[#72767C]">/d</span>
            </b>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;

cars = [
  {
    id: 1,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/car-audi-a3.png",
  },
  {
    id: 2,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/mercedes-benz-m-class.png",
  },
  {
    id: 3,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/white car.png",
  },
  {
    id: 4,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/maruti-suzuki.png",
  },
  {
    id: 5,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/suzuki-ertiga.png",
  },
  {
    id: 6,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/toyota-innova.png",
  },
  {
    id: 7,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/car-audi-a3.png",
  },
  {
    id: 8,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/mercedes-benz-m-class.png",
  },
  {
    id: 9,
    name: "Porshe 718 Cayman S",
    bodyType: "Coupe",
    price: 400,
    places: 4,
    image: "/img/booking/white car.png",
  },
];
