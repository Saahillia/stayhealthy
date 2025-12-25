import { useState } from "react";

function Review() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h3>Review</h3>
      <textarea placeholder="Write review"></textarea>
      <button
        disabled={submitted}
        onClick={() => setSubmitted(true)}
      >
        Submit Review
      </button>
    </div>
  );
}
export default Review;
    