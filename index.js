const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
require("dotenv").config();

const mongoose = require("mongoose");

// middleware
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://dahal-book-store.vercel.app"
  ],
  credentials: true
}));

// routes
const bookRoute = require("./src/books/book.route");
const orderRoute= require("./src/orders/order.route");
const userRoute = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats")


app.use("/api/books", bookRoute);
app.use("/api/orders", orderRoute);
app.use('/api/auth',userRoute );
app.use('/api/admin', adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get("/", (req, res) => {
    res.send("Chaw Be Lar");
  });
}

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});