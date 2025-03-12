import Header from "./header";

function Cart() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <h1>No product selected!</h1>
        <p>Go back to select a product </p>
      </div>
    </div>
  );
}
export default Cart;
