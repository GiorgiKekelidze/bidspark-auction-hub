
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  id: string;
  image: string;
  title: string;
  startingPrice: number;
  bids: number;
  endTime: string;
};

function getTimeLeft(end: string) {
  const total = Date.parse(end) - Date.now();
  if (total <= 0) return "Ended";
  const mins = Math.floor((total / 1000 / 60) % 60);
  const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return (
    (days > 0 ? `${days}d ` : "") +
    (hrs > 0 ? `${hrs}h ` : "") +
    (mins > 0 ? `${mins}m` : "")
  ).trim() || "Ending soon";
}

export const ItemCard: React.FC<Props> = ({
  id,
  image,
  title,
  startingPrice,
  bids,
  endTime,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, boxShadow: "0 6px 24px rgba(0,0,0,0.09)" }}
      onClick={() => navigate(`/items/${id}`)}
      className="cursor-pointer rounded-lg bg-white dark:bg-card border border-border shadow-md hover:shadow-lg flex flex-col transition"
    >
      <img src={image} alt={title} className="aspect-video object-cover w-full rounded-t-lg" />
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="font-montserrat font-bold text-lg truncate" title={title}>{title}</div>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Start at <span className="font-semibold text-green-600">${startingPrice}</span></span>
          <span className="bg-muted px-2 py-1 rounded text-xs">{getTimeLeft(endTime)}</span>
        </div>
        <div className="text-sm text-right text-gray-500">{bids} bid{bids !== 1 ? "s" : ""}</div>
      </div>
    </motion.div>
  );
};
