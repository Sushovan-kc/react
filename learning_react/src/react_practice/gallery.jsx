import { React,useState,useEffect } from 'react'
import axios from 'axios'
const Gallery = () => {
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)

    const fetchImages = async () => {
        const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
        setImages(response.data)
    }

    useEffect(() => {
        fetchImages()
    }, [index])
    // const getimage=() => {
    //     fetchImages()
    // }
  return (
    <div className='bg-gray-700 h-screen p-5'>
        <h1 className='text-4xl font-bold text-white text-center py-5'>Image Gallery</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-4/5'>
            {images.map((image) => (
                <a href={image.download_url} target="_blank" rel="noopener noreferrer" key={image.id}>
                    <img src={image.download_url} alt={image.id} className='w-48 h-48 object-cover rounded-lg' />
                    <p className='text-white text-center text-bold'>{image.author}</p> 
                </a>
   
            ))}
        </div>
        <div className='flex justify-center mt-5 gap-5'>
            <button onClick={() => 
                {setIndex(index - 1)
                setImages([])
                }
                }
                 className='px-4 py-2 p-2 bg-blue-500 text-white rounded active:scale-95' disabled={index === 0} style={{opacity: index === 0 ? 0.5 : 1}}>
                Previous
            </button>
            <h4 className='text-white mx-2 mt-2 '>Page {index + 1}</h4>
            <button onClick={() => {
                setIndex(index + 1);
                setImages([]);
            }} className='px-4 py-2 p-2 bg-blue-500 text-white rounded  active:scale-95'>
                Next
            </button>
        </div>
    </div>
  )
}

export default Gallery