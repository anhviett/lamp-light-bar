export function ProductDetails() {
  return (
    <section className="product-details" aria-labelledby="product-name">
      <p className="eyebrow">The new collection</p>
      <h1 id="product-name">CHANDELIER</h1>
      <p className="product-copy">Available in two colors</p>
      <ul className="color-options" aria-label="Available colors">
        <li><span className="color-dot black" />Black</li>
        <li><span className="color-dot white" />White</li>
      </ul>
      <p className="price">$150</p>
      <a className="order-button" href="#order">Order now</a>
    </section>
  );
}
