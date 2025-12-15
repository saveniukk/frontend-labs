function ImageGrid() {
    const [activeBlock, setActiveBlock] = React.useState(0);
    const [currentImage, setCurrentImage] = React.useState('img/palette.png');
    
    const images = [
        'img/palette.png',
        'img/women.png',
        'img/couple.png'
    ];
    
    const handleBlockClick = (index) => {
        setActiveBlock(index);
        setCurrentImage(images[index]);
    };
    
    return (
        <section className="image-grid-section">
            <div className="image-grid-container">
                <div className="grid-image">
                    <img src={currentImage} alt="Grid" />
                </div>
                <div className="grid-text-blocks">
                    <div 
                        className={`text-block ${activeBlock === 0 ? 'active' : ''}`}
                        onClick={() => handleBlockClick(0)}
                    >
                        <h3>Far far away, behind the word mountains</h3>
                        <p>Far far away, behind the word mountains far from the countries Vokalia and Consonantia, there live.</p>
                    </div>
                    <div 
                        className={`text-block ${activeBlock === 1 ? 'active' : ''}`}
                        onClick={() => handleBlockClick(1)}
                    >
                        <h3>Far far away, behind the word mountains</h3>
                        <p>Far far away, behind the word mountains far from the countries Vokalia and Consonantia, there live.</p>
                    </div>
                    <div 
                        className={`text-block ${activeBlock === 2 ? 'active' : ''}`}
                        onClick={() => handleBlockClick(2)}
                    >
                        <h3>Far far away, behind the word mountains</h3>
                        <p>Far far away, behind the word mountains far from the countries Vokalia and Consonantia, there live.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

