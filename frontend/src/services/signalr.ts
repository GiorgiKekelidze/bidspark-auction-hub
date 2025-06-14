
import * as signalR from "@microsoft/signalr";

// Singleton connection
const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:5001/auctionhub") // Change to your backend URL
  .withAutomaticReconnect()
  .build();

export default connection;
