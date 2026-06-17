import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketmanager.js";

import cors from "cors";
import userRoutes from "./routes/userroutes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);


const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb://amaansayed0206_db_user:lecMxbM3FrimB5Jx@ac-gx7czve-shard-00-00.nn7xtxy.mongodb.net:27017,ac-gx7czve-shard-00-01.nn7xtxy.mongodb.net:27017,ac-gx7czve-shard-00-02.nn7xtxy.mongodb.net:27017/?ssl=true&replicaSet=atlas-12c2p2-shard-0&authSource=admin&appName=Cluster0",
  );
  console.log(`mongo connected: ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("listening to port 8000");
  });
};

start();
