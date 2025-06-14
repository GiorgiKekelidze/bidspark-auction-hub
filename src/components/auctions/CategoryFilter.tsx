
import React from "react";

export const CategoryFilter: React.FC = () => (
  <select className="border border-border py-2 px-4 rounded-md bg-popover text-foreground font-medium hover-scale focus:outline-none">
    <option value="">All Categories</option>
    <option value="tech">Tech</option>
    <option value="furniture">Furniture</option>
    <option value="collectibles">Collectibles</option>
    <option value="pets">Pets</option>
    {/* Extend as needed */}
  </select>
);
