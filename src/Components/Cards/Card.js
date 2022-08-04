import React from 'react'
import './Card.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Keywords from '../Keywords/Keywords';
import Button from '../Button/Button';
import ImageSlider from '../ImageSlider/ImageSlider';


const Card = ({ title, description, images, demo, git, flip ,keywords}) => {
  return (
    
    <div className='card-container'>
        { !flip ? 

                    <div className="card">
                    <div className="card-main">
                        <div className="card-info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <Keywords keywords={keywords} />
                        </div>
                        <div className="card-links">
                            <Button icon={<LinkIcon />} label="Try it!" url={demo} />
                            <Button icon={<GitHubIcon />} label="View on GitHub" url={git} />
                        </div>
                    </div>
                    <ImageSlider images={images} />
                    </div>
                :
                    <div className="card">
                    <ImageSlider images={images} />
                    <div className="card-main">
                        <div className="card-info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <Keywords keywords={keywords} />
                        </div>
                        <div className="card-links">
                            <Button icon={<LinkIcon />} label="Try it!" url={demo} />
                            <Button icon={<GitHubIcon />} label="View on GitHub" url={git} />
                        </div>
                    </div>
                    </div>
        }
    </div>
  )
}

export default Card