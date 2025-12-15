function Image({ src, alt, link }) {
    const [imageSize, setImageSize] = React.useState(400);
    const [isVisible, setIsVisible] = React.useState(true);

    const handleEnlarge = () => {
        setImageSize(prevSize => prevSize + 50);
    };

    const handleReduce = () => {
        setImageSize(prevSize => Math.max(100, prevSize - 50));
    };

    const handleDelete = () => {
        setIsVisible(false);
    };

    const handleAdd = () => {
        setIsVisible(true);
    };

    if (!isVisible) {
        return (
            <div className="image-container">
                <div className="image-controls">
                    <button onClick={handleAdd}>Додати</button>
                </div>
            </div>
        );
    }

    return (
        <div className="image-container">
            <a href={link}>
                <img 
                    id="main-image" 
                    src={src} 
                    alt={alt} 
                    width={imageSize}
                />
            </a>
            <div className="image-controls">
                <button onClick={handleAdd}>Додати</button>
                <button onClick={handleEnlarge}>Збільшити</button>
                <button onClick={handleReduce}>Зменшити</button>
                <button onClick={handleDelete}>Видалити</button>
            </div>
        </div>
    );
}
