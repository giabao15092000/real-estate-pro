import React, { useEffect } from "react";
import { animateCounters } from "../../utils/helpers";

const Statistics = () => {
  useEffect(() => {
    animateCounters();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="stats-counter" data-target="100000">
              0
            </div>
            <p className="text-gray-600 mt-2">Posted News</p>
          </div>
          <div>
            <div className="stats-counter" data-target="50000">
              0
            </div>
            <p className="text-gray-600 mt-2">Members</p>
          </div>
          <div>
            <div className="stats-counter" data-target="1000">
              0
            </div>
            <p className="text-gray-600 mt-2">Agents</p>
          </div>
          <div>
            <div className="stats-counter" data-target="63">
              0
            </div>
            <p className="text-gray-600 mt-2">Provices/Cities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
