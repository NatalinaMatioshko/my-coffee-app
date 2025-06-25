import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <>
      <section className={css.hero}>
        <div className={css.container}>
          <p>We’ve got your morning covered with</p>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button>Order Now</button>
        </div>
      </section>
      <section>
        <h2>Discover the best coffee</h2>
        <p>
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <button>Learn More</button>
        <img src="" alt="" />
      </section>
    </>
  );
};

export default HomePage;
