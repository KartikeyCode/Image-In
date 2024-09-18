"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Picture {
  name: string;
  imageURL: string;
}

interface GalleryContextType {
  gallery: Picture[];
  setGallery: React.Dispatch<React.SetStateAction<Picture[]>>;
}


interface GalleryProviderProps {
  children: ReactNode;
}

export const GalleryContext = createContext<GalleryContextType | undefined>(
  undefined
);

export const GalleryProvider: React.FC<GalleryProviderProps> = ({ children }) => {
  const [gallery, setGallery] = useState<Picture[]>([]);

  return (
    <GalleryContext.Provider value={{ gallery, setGallery }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GalleryProvider");
  }
  return context;
};
