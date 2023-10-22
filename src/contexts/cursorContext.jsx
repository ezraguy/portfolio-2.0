import React, { createContext, useState } from "react";

export const CursorContext = createContext();
export function CursorProvider({ children }) {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);
  return (
    <CursorContext.Provider value={{ isWhiteBackground, setIsWhiteBackground }}>
      {children}
    </CursorContext.Provider>
  );
}
