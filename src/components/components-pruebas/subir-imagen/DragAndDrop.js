import React from "react";
import ImageUploading from "react-images-uploading";
import { BoxDragAndDrop } from "./BoxDragAndDrop";
import { ImageSelected } from "./ImageSelected";
import { useUploadImage } from "./hooks/useUploadImage";
import { Message } from "./Message";

const DragAndDrop = () => {
  const { urlImage, handleChange, images, ...rest } = useUploadImage();

  return (
    <>
      <Message urlImage={urlImage} />
      <ImageUploading
        multiple={false}
        maxNumber={1}
        value={images}
        onChange={handleChange}
        acceptType={["jpg", "gif", "png", "jpeg"]}
      >
        {({
          imageList,
          onImageUpload,
          dragProps,
          isDragging,
          onImageRemove,
          onImageUpdate,
        }) => (
          <>
            {imageList[0] ? (
              <ImageSelected
                {...{ onImageRemove, onImageUpdate, ...rest }}
                img={imageList[0].dataURL}
              />
            ) : (
              <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
            )}
          </>
        )}
      </ImageUploading>
    </>
  );
};

export default DragAndDrop;
