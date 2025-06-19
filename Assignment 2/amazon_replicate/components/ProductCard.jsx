import { Button } from "@/components/ui/button"; // ✅ required for Buy Now button


export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p>{product.description}</p>
      <Button variant="outline" className="buy-button" style={{ marginTop: "10px" }}>
        Buy Now
      </Button>
    </div>
  );
}