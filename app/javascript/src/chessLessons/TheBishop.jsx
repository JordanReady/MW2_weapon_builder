import React from "react";

import "../learn/learn.scss";

export default function TheBishop(props) {
  return (
    <div className="container">
      <div className="row lesson-row">
        <div className="col-12">
          <h1 className="lesson-title">The Bishop</h1>
        </div>
        <div className="col-12">
          <p className="content">
            The bishop is a long range attacking piece that can move any number
            of squares diagonally, forwards to the right or left, or backwards
            to the right or left. You may only move the piece in one of those
            four directions once per turn. You may notice from the start of the
            game both players have one bishop placed on a light square and one
            placed on a dark square. Because of the nature of the bishops
            movement, the light square bishop will only be able to move on the
            light squares and the dark square bishop will only be able to move
            on the dark squares. The bishop can't move through its own pieces
            and will capture an opposing players piece by moving itself to the
            position of that piece.
          </p>
        </div>
      </div>
    </div>
  );
}
