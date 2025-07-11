import React, { useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

const Main = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dpImage = document.getElementById('dp-image');

        if (dpImage) {
            toPng(dpImage)
                .then((dataUrl) => {
                    download(dataUrl, 'conference-dp.png');
                })
                .catch((err) => {
                    console.error('Error generating image:', err);
                    alert('There was an issue generating the image. Please try again.');
                });
        } else {
            console.error('Element with id "dp-image" not found.');
        }
    };

    const isFormValid = name && image;

    return (
        <div className='main'>
            <div className='ikeji-banner'>
                <img src={assets.music_conf_banner} alt="Ikeji Banner" />
            </div>
            <div className='main-container card p-6'>
                <div className='pb-4'>
                    <p className='text-center text-lg font-semibold'>Generate your own Conference Display Picture</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='relative dp-image-wrapper' id='dp-image'>
                        <img src={assets.music_conf_dp} alt="Conference Background" className='card-img' />
                        {image && (
                            <img
                                src={image}
                                alt="Selected"
                                className='profile-img'
                            />
                        )}
                        {name && (
                            <p className='name-overlay'> {name}</p>
                        )}
                    </div>
                    <div className='py-4 flex flex-col gap-4'>
                        <p className='font-bold'>Create your entry below</p>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="ikeji-name">Your Name:</label>
                            <input
                                type="text"
                                name="ikeji-name"
                                id='ikeji-name'
                                value={name}
                                onChange={handleNameChange}
                                className='input-field'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label>Upload Image here:</label>
                            <label htmlFor="ikeji-image" className='upload-label'>
                                <div className='upload-icon'>+</div>
                            </label>
                            <input
                                type="file"
                                name="ikeji-image"
                                id='ikeji-image'
                                accept="image/*"
                                onChange={handleImageChange}
                                className='hidden'
                            />
                        </div>

                        <button
                            type='submit'
                            className={`download-btn ${!isFormValid ? 'disabled' : ''}`}
                            disabled={!isFormValid}
                        >
                            Download
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Main;
