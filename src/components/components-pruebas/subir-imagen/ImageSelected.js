import React from 'react';

export const ImageSelected = ({ 
    img, 
    loading, 
    onUpload, 
    onImageRemove, 
    onImageUpdate 
}) => {

  return (
    <div>
      <img className='image-selected' src={img} alt='image-selected' />
      <div className='container-buttons'>
        {
          loading
            ? <p className='loading-label'>Upload image ⏳...</p>
            : <>
              <button disabled={loading} onClick={onUpload}>Upload 📤</button>
              <button disabled={loading} onClick={() => onImageUpdate(0)}>Update ✏️</button>
              <button disabled={loading} onClick={() => onImageRemove(0)}>Cancel ❌</button>
            </>
        }
      </div>
    </div>
  )
}