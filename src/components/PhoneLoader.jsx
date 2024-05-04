import { Html } from '@react-three/drei'
import React, { useState, useEffect } from 'react'


const PhoneLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Html>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
        <div className={`loader-container ${loading ? '' : 'complete'}`}>
          <div className="loader"></div>
        </div>
      </div>
    </Html>
  )
}

export default PhoneLoader
