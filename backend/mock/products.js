const products = [
  {
    name: "Airpods 2nd Gen",
    image: "/images/airpods.png",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 2, // Corrected count
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        text: "These AirPods are amazing!  Great sound quality and very comfortable.",
        date: "2023-10-26",
      },
      {
        user: "Jane Smith",
        rating: 4,
        text: "Good value for the price.  Battery life could be a bit better.",
        date: "2023-10-25",
      },
    ],
  },
  {
    name: "iPhone 11 Pro 256GB",
    image: "/images/phone.png",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 3, // Corrected count
    reviews: [
      {
        user: "TechReviewer",
        rating: 4,
        text: "Solid phone, but the price is a bit high compared to the competition.",
        date: "2023-10-27",
      },
      {
        user: "Alice Johnson",
        rating: 5,
        text: "Love the camera on this phone!  Best I've ever used.",
        date: "2023-10-28",
      },
      {
        user: "Bob Williams",
        rating: 3,
        text: "It's a good phone, but I expected a bit more for the price.",
        date: "2023-10-29",
      },
    ],
  },
  {
    name: "Cannon EOS 80D DSLR",
    image: "/images/camera.png",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 2, // Corrected Count
    reviews: [
      {
        user: "PhotoEnthusiast",
        rating: 4,
        text: "Great camera for both stills and video.  Very versatile.",
        date: "2023-10-27",
      },
      {
        user: "BeginnerPhotog",
        rating: 2,
        text: "A bit complicated to learn, but the image quality is good.",
        date: "2023-10-28",
      },
    ],
  },
  {
    name: "Sony Playstation 5",
    image: "/images/playstation.png",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 4, // Corrected count
    reviews: [
      {
        user: "GamerX",
        rating: 5,
        text: "The PS5 is incredible!  Graphics are stunning, and the loading times are blazing fast.",
        date: "2023-10-26",
      },
      {
        user: "CasualGamer",
        rating: 4,
        text: "Really enjoying the new games.  The controller is a big improvement.",
        date: "2023-10-27",
      },
      {
        user: "HardcoreGamer",
        rating: 5,
        text: "Best console ever made!  Can't wait for more exclusive titles.",
        date: "2023-10-28",
      },
      {
        user: "PSFan",
        rating: 5,
        text: "Love the new design and the performance is top-notch.",
        date: "2023-10-29",
      },
    ],
  },
  {
    name: "Logitech G-Series",
    image: "/images/mouse.png",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 3, //Corrected count
    reviews: [
      {
        user: "MouseMaster",
        rating: 4,
        text: "Very comfortable and responsive mouse. Great for gaming.",
        date: "2023-10-27",
      },
      {
        user: "PCGamer123",
        rating: 3,
        text: "Good mouse, but the software could be better.",
        date: "2023-10-28",
      },
      {
        user: "GamerGirl",
        rating: 4,
        text: "Love the customization options! Perfect for my setup.",
        date: "2023-10-29",
      },
    ],
  },
  {
    name: "Amazon Echo Dot",
    image: "/images/alexa.png",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 2, // Corrected Count
    reviews: [
      {
        user: "TechSavvyUser",
        rating: 5,
        text: "The Echo Dot is a fantastic little smart speaker.  Great sound for its size.",
        date: "2023-10-26",
      },
      {
        user: "HomeAutomationFan",
        rating: 3,
        text: "Works well, but sometimes has trouble understanding my commands.",
        date: "2023-10-27",
      },
    ],
  },
];

export default products;
