
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 animate-fade-in">
          BidSpark Auction Hub
        </h1>
        <p className="text-xl text-muted-foreground font-inter">
          Where deals meet excitement. Browse and bid on unique items!
        </p>
        <Link
          to="/auctions"
          className="inline-block px-8 py-3 rounded-lg text-xl font-medium bg-primary text-primary-foreground shadow-xl transition hover:scale-105 story-link"
        >
          Browse Auctions
        </Link>
      </div>
    </div>
  );
};

export default Index;
