import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Payfirst API is live",
    version: "1.0.0",
    powered_by: "@CoinbaseDev + x402"
  });
});

// Simulate paywall creation
app.post("/create-paywall", (req, res) => {
  const { url, price } = req.body;
  const id = Math.random().toString(36).substring(2, 8);
  res.json({
    paywall_id: id,
    paywall_link: `https://payfirst.app/${id}`,
    price,
    currency: "USDC",
    status: "created"
  });
});

// Simulate payment verification
app.post("/verify-payment", (req, res) => {
  const { txHash } = req.body;
  res.json({
    txHash,
    confirmed: true,
    network: "BNB Chain",
    settled_to: "0xWalletAddress...",
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Payfirst API running on port ${PORT}`));
