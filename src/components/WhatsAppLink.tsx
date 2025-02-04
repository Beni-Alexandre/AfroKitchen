import { Button } from "./ui/button";

function WhatsAppLink() {
  const phoneNumber = "+2330530202061"; // Replace with your actual WhatsApp number
  const message = "Hello, I'm interested in your seasonings!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition duration-300"
    >
      Chat on WhatsApp
    </Button>
  );
}
export default WhatsAppLink;
