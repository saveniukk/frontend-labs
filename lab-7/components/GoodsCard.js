function GoodsCard({ image, name, price }) {
    return (
        <div className="goods-card">
            <img src={image} alt={name} className="goods-image" />
            <h3 className="goods-name">{name}</h3>
            <p className="goods-price">{price} грн</p>
        </div>
    );
}

