// import React, { useState } from 'react'
// import "../css/ImageUpload.css"

// const ImageUpload = () => {
//     const [caption, setCaption] = useState('');
//     const [image, setImage] = useState(null);
//     const [progress, setProgress] = useState('0');

//     const handleChange = (e) => {
//         //เลือกหลายไฟล์ มันจะเลือกไฟล์เดียวคือไฟล์แรก
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     };

//     const handleUpload = () => {

//     }
//     return (
//         <div>
//             <input type="file" onChange={handleChange} />
//             <input type="text" placeholder='Enter caption' onChange={event => setCaption(event.target.value)} value={caption} />
//             <button onClick={handleUpload}>Upload</button>
//         </div>
//     )
// }

// export default ImageUpload 

import React from 'react'

const ImageUpload = () => {
  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload