import React, { useCallback, useEffect, useMemo } from "react";
import largeFile from "./large-file.json";

export default function LargeDataComponents({ count }) {
  const getData = useMemo(() => {
    return largeFile?.length;
  }, []);

  const callEvent = useCallback(() => {
    console.log("loader");
  },[]);
  useEffect(() => {
    window.addEventListener("load", callEvent);
    return () => {
      window.removeEventListener("load",callEvent);
    };
  }, []);

  return (
    <div>
      <p>{getData}</p>
      <p>LargeDataComponents{count}</p>
    </div>
  );
}
