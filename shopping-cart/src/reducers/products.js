let innitialSate = [
  {
    id: 1,
    name: "Iphone 7 Plus",
    image:
      "https://didongthongminh.vn/upload_images/2019/10/iphone-7-plus-red.png",
    description: "Sản phẩm do Apple sản xuất",
    price: 500,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "Samsung galaxy S7",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71KApmxcubL._AC_SL1500_.jpg",
    description: "Sản phẩm do Samsung sản xuất",
    price: 400,
    inventory: 16,
    rating: 3,
  },
  {
    id: 3,
    name: "Oppo F1s",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-f1s.jpg",
    description: "Sản phẩm do China sản xuất",
    price: 450,
    inventory: 5,
    rating: 5,
  },
];

const products = (state = innitialSate, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
