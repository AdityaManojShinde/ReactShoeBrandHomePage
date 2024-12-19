import "../App.css";

export default function Hero() {
  return (
    <>
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-img">
            <img src="./flipkartlogo.svg" alt="Flipkart Logo" />
            <img src="./amazon.svg" alt="Amazon Logo" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="./shoe.png" alt="Shoe Image" />
      </div>
    </>
  );
}
