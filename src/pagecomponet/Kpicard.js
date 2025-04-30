import React from "react";

function Kpicard({factOverview}) {
  return (
    <>
      <section className="container mt-4 d-flex justify-content-between align-items-center flex-wrap">
        <article className="card-body mb-3">
          <h2 className="mb-4 text-center">Train</h2>
          <Linechart data={} />
        </article>

        <article className="card-body mb-3">
          <h2 className="mb-4 text-center">Partition</h2>
          <div className="card-body">
            <Piechart data={} />
          </div>
        </article>
        <article className="card-body mb-3">
          <h2 className="mb-4 text-center">Partition</h2>
          <div className="card-body">
            <Piechart data={} />
          </div>
        </article>
      </section>
    </>
  );
}

export default Kpicard;
