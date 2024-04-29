import React from "react";

export const BoxDragAndDrop = ({ isDragging, onImageUpload, dragProps }) => {
  return (
    <>
      <div
        onClick={onImageUpload}
        {...dragProps}
        className={`container-dnd center-flex ${
          isDragging ? "isDragging" : ""
        }`}
      >
        <span className="label-dnd">
          Elija una imagen o arrastre y suelte una imagen 📤
        </span>
      </div>
    </>
  );
};
