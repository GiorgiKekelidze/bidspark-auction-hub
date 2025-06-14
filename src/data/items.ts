
export type AuctionItem = {
  id: string;
  image: string;
  title: string;
  startingPrice: number;
  bids: number;
  endTime: string;
};

export const MOCK_ITEMS: AuctionItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    title: "Gaming Graphics Card RTX 4090",
    startingPrice: 900,
    bids: 18,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 1.2).toISOString(),
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    title: "MacBook Pro 16” M1 MAX",
    startingPrice: 1100,
    bids: 22,
    endTime: new Date(Date.now() + 1000 * 60 * 35).toISOString(),
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    title: "Vintage Cat Portrait",
    startingPrice: 350,
    bids: 6,
    endTime: new Date(Date.now() + 1000 * 60 * 142).toISOString(),
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    title: "UltraSharp 4K Monitor",
    startingPrice: 400,
    bids: 7,
    endTime: new Date(Date.now() + 1000 * 60 * 75).toISOString(),
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1606813902872-6c7e7c7be8b8?auto=format&fit=crop&w=600&q=80",
    title: "High Fidelity Headphones",
    startingPrice: 180,
    bids: 11,
    endTime: new Date(Date.now() + 1000 * 60 * 180).toISOString(),
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
    title: "Signed Baseball",
    startingPrice: 120,
    bids: 3,
    endTime: new Date(Date.now() + 1000 * 60 * 250).toISOString(),
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    title: "iPad Pro 11”",
    startingPrice: 650,
    bids: 8,
    endTime: new Date(Date.now() + 1000 * 60 * 410).toISOString(),
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
    title: "Rolex Submariner Watch",
    startingPrice: 5000,
    bids: 19,
    endTime: new Date(Date.now() + 1000 * 60 * 50).toISOString(),
  },
  {
    id: "9",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80",
    title: "Limited Sneakers DS",
    startingPrice: 300,
    bids: 16,
    endTime: new Date(Date.now() + 1000 * 60 * 245).toISOString(),
  },
  {
    id: "10",
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
    title: "DJI Drone Air 2S",
    startingPrice: 700,
    bids: 4,
    endTime: new Date(Date.now() + 1000 * 60 * 512).toISOString(),
  },
  {
    id: "11",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Nikon D850 Camera Body",
    startingPrice: 1020,
    bids: 13,
    endTime: new Date(Date.now() + 1000 * 60 * 400).toISOString(),
  },
  {
    id: "12",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    title: "Luxury Fountain Pen",
    startingPrice: 90,
    bids: 2,
    endTime: new Date(Date.now() + 1000 * 60 * 600).toISOString(),
  },
];
