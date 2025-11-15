import { useEffect, useState } from "react";
import { LoadingSpinner } from "./skeleton";

export default function VisitCounter() {
  const [totalCount, setTotalCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/total-visits", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setTotalCount(data.totalVisits))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="text-gray-200 text-xl flex justify-center items-center">
      {totalCount !== null ? (
        <span title="views" className="cursor-default">
          {" "}
          {totalCount}{" "}
        </span>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
