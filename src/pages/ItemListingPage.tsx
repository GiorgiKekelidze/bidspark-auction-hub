
import React from "react";
import { MOCK_ITEMS } from "@/data/items";
import { ItemCard } from "@/components/ItemCard";
import { motion, AnimatePresence } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ItemListingPage: React.FC = () => {
  return (
    <section className="py-8 px-2 sm:px-4 container mx-auto">
      <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mb-8 text-center">
        Online Auction Listings
      </h1>
      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_ITEMS.map((item) => (
            <motion.div
              variants={animation}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={item.id}
            >
              <ItemCard {...item} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
};
