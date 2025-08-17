import React, { useState } from "react";

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { rating, feedback });
    alert("Thank you for your feedback!");
    setRating(0);
    setHover(0);
    setFeedback("");
  };

  return (
    <section
      id="feedback"
      className="py-16 bg-gradient-to-b from-white to-red-50"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h3 className="text-3xl font-bold pb-2 mb-6 hover:scale-105 transition-transform text-red-600 border-b-4 border-red-300">
          Feedback
        </h3>

        {/* Card */}
        <div
          className="relative max-w-3xl mx-auto bg-white rounded-2xl shadow-xl
                     border border-red-200 overflow-hidden"
        >
          {/* Subtle top accent */}
          <div className="h-1 bg-gradient-to-r from-red-500 via-rose-400 to-red-500" />

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                Rate our website
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((n) => {
                  const active = (hover || rating) >= n;
                  return (
                    <button
                      key={n}
                      type="button"
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      className={`text-3xl transition-all duration-200
                                 ${
                                   active
                                     ? "text-red-500 scale-110"
                                     : "text-gray-300 hover:text-red-400 hover:scale-105"
                                 }`}
                    >
                      ★
                    </button>
                  );
                })}
                <span className="ml-3 text-sm text-gray-600">
                  {rating > 0 ? `${rating}/5` : "Choose a rating"}
                </span>
              </div>
            </div>

            {/* Feedback textarea */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                Your feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what you liked or what we can improve..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-red-200
                           focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400
                           bg-white/90 text-gray-800 placeholder:text-gray-400"
              />
              <p className="mt-2 text-xs text-gray-500">
                We value your feedback. It helps us improve the experience.
              </p>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <i className="far fa-shield-alt mr-1" />
                Your response is anonymous.
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl
                           bg-red-600 text-white font-semibold shadow-lg
                           hover:bg-red-700 active:scale-95 transition"
              >
                <i className="fas fa-paper-plane" />
                Submit Feedback
              </button>
            </div>
          </form>

          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute -inset-1 rounded-2xl opacity-30 blur-2xl
                          bg-gradient-to-r from-red-400 via-rose-300 to-red-400"
          />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
