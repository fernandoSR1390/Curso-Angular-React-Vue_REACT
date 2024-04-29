import React from "react";
import { useUploadImage } from "./hooks/useUploadImage";
import ReactImageUploading from "react-images-uploading";
import { ImageSelected } from "./ImageSelected";
import { BoxDragAndDrop } from "./BoxDragAndDrop";

const ArrastrarSoltar = () => {
  const { urlImage, handleChange, images, ...rest } = useUploadImage();

  return (
    <ReactImageUploading multiple={false} maxNumber={1} value={images} onChange={handleChange}>
        {({
            imageList,
            onImageUpload,
            dragProps,
            isDragging,
            onImageRemove,
            onImageUpdate,
        }) => {
            <>
                {
                    imageList[0]
                    ? <ImageSelected />
                    : <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
                }
            </>
        }}
      </ReactImageUploading>
  );
};

export default ArrastrarSoltar;
