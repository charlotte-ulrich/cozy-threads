const { db } = require('./server/db');
const Product = require('./server/db/models/model_products');
const Order = require('./server/db/models/model_orders');

const products = [
  {
    id: 1,
    imageUrl:
      'https://www.roughlinen.com/cdn/shop/files/Wool_throw_grey_1_2000x.jpg?v=1712178866',
    name: 'Cashmere Throw',
    category: 'Home',
    shortDescription:
      'Our best quality cashmere now large enough to cuddle up on your couch. This 100% cashmere throw is a classic style to fit your decor, but luxurious enough to feel like a special new addition to your space.',
    price: 16000,
  },
  {
    id: 2,
    imageUrl:
      'https://images.thdstatic.com/productImages/bf77705f-b5dc-4300-bf56-5ec7da538896/svn/deerlux-bed-blankets-qi004049-cm-64_600.jpg',
    name: 'Faux Fur Throw',
    category: 'Home',
    shortDescription:
      'The epitome of luxury, this faux fur throw will have you cuddled up in the peak of glamour. Made from our sustainalbe faux fur material, this weighted throw is ultra comforting and cozy.',
    price: 20000,
  },
  {
    id: 3,
    imageUrl:
      'https://www.turmerry.com/cdn/shop/products/waffle-weave-organic-cotton-blanket-and-throw-turmerry-2_1200x1200.jpg?v=1641610438',
    name: 'Waffle Knit Throw',
    category: 'Home',
    shortDescription:
      'This throw is our lightest and softest knit, perfect for those cool summer nights. Despite its loose knit, this waffle weave is as cozy as it gets, while keeping you cool.',
    price: 9000,
  },
  {
    id: 4,
    imageUrl:
      'https://images.quince.com/2NKfKvm5CWYbqtjKV6d5nz/cb1659d5cb93526639728ef3d5c8b1b5/Throw_ItalianCottonPlaid_Wine_053.jpg?w=1582&q=50&h=1978&reqOrigin=website-ssg',
    name: 'Plaid Throw',
    category: 'Home',
    shortDescription:
      'Super high quality wool in our signature classic plaid. The perfect compliment to your your cottage-core living room or light academia bedroom.',
    price: 12000,
  },
  {
    id: 5,
    imageUrl:
      'https://frame-store.com/cdn/shop/files/LMSW0088_GREY_FRONT_0439.jpg?v=1696978072',
    name: 'Womens Cashmere Crewneck',
    category: 'Apparel',
    shortDescription:
      'Our highest quality cashmere made in our signature crewneck style. The perfect oversized fit to provide endless comfort and style all winter long.',
    price: 9500,
  },
  {
    id: 6,
    imageUrl:
      'https://colorfulstandard.com/cdn/shop/products/Merino_Wool_Beanie-Beanie-CS5081-Desert_Khaki_a87ce051-deda-4652-904c-fa64a391beec.jpg?v=1639445728&width=2048',
    name: 'Unisex Wool Beanie',
    category: 'Apparel',
    shortDescription:
      'Level up your warmth this winter with our signature unisex wool beanie. This beanie is made of our highest quality cashmere and is the perfect addition to your winter style.',
    price: 4500,
  },
  {
    id: 7,
    imageUrl:
      'https://us.sunspel.com/cdn/shop/files/mjum8079-gyaa-1_b07158bf-082a-4759-a6f5-dd47e38ab8fb.jpg?v=1690214862',
    name: 'Mens Cashmere Crewneck',
    category: 'Apparel',
    shortDescription:
      'Our highest quality cashmere made in our signature crewneck style. The perfect oversized fit to provide endless comfort and style all winter long.',
    price: 9500,
  },
  {
    id: 8,
    imageUrl:
      'https://turnbullandasser.com/cdn/shop/products/AFSC3221_205797_2026_H.jpg?v=1666007109',
    name: 'Lambswool Scarf',
    category: 'Apparel',
    shortDescription:
      'We sourced the finest lambswool available for this winter staple. this is our most versatile piece and is a winter staple.',
    price: 5500,
  },
];

const orders = [
  {
    status: 'incomplete',
    userId: 1,
  },
  {
    status: 'complete',
    userId: 2,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const createdProducts = await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );
    const createdOrder = await Promise.all(
      orders.map((order) => {
        return Order.create(order);
      })
    );
    const orderOne = await Order.findByPk(1);
    await orderOne.setProducts(await Product.findByPk(7));
    const orderTwo = await Order.findByPk(2);
    await orderTwo.setProducts([
      await Product.findByPk(15),
      await Product.findByPk(3),
      await Product.findByPk(20),
    ]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh no! Something went wrong!');
      console.error(err);
      db.close();
    });
}
