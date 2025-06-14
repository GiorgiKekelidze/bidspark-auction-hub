
import React, { useEffect, useState } from "react";
import connection from "../services/signalr";
import { Carousel } from "../components/auctions/Carousel";
import { CountdownTimer } from "../components/auctions/CountdownTimer";
import { BidForm } from "../components/auctions/BidForm";
import { BidHistory } from "../components/auctions/BidHistory";

type Bid = { user: string; amount: number; time: string };

export default function AuctionDetail() {
  const [item, setItem] = useState<any>({
    id: 1,
    title: "MacBook Pro 16",
    desc: "Powerful laptop...",
    category: "Tech",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    ],
    start_price: 1200,
    current_price: 1270,
    end_date: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    seller: { username: "techKing", avatar: "" },
  });
  const [bids, setBids] = useState<Bid[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    connection.start().then(() => {
      setConnected(true);
      connection.invoke("JoinAuction", item.id);
    });
    connection.on("ReceiveBid", (bid: Bid) => {
      setBids((b) => [bid, ...b]);
      setItem((it: any) => ({ ...it, current_price: bid.amount }));
    });
    return () => {
      connection.off("ReceiveBid");
      connection.stop();
    };
  }, [item.id]);

  const handleBid = (amount: number) => {
    connection.invoke("PlaceBid", { itemId: item.id, amount });
  };

  return (
    <div className="container max-w-3xl mx-auto py-8 font-inter">
      <h1 className="text-3xl font-montserrat font-bold mb-2">{item.title}</h1>
      <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Carousel images={item.images} />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="text-xl text-green-700 font-bold">
            ${item.current_price}
          </div>
          <CountdownTimer endTime={item.end_date} />
          <div>
            <span className="text-muted-foreground">Category: </span>
            <span className="font-semibold">{item.category}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Seller: </span>
            <span className="font-semibold">{item.seller.username}</span>
          </div>
          <BidForm currentBid={item.current_price} onBid={handleBid} disabled={!connected} />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="font-bold font-montserrat text-lg mb-2">Bid History</h2>
        <BidHistory bids={bids} />
      </div>
    </div>
  );
}
