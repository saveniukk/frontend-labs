function GoodsGallery() {
    const goods = [
        { id: 1, name: 'Ноутбук', price: 25000, image: 'https://via.placeholder.com/300x200?text=Ноутбук' },
        { id: 2, name: 'Смартфон', price: 15000, image: 'https://via.placeholder.com/300x200?text=Смартфон' },
        { id: 3, name: 'Навушники', price: 2500, image: 'https://via.placeholder.com/300x200?text=Навушники' },
        { id: 4, name: 'Планшет', price: 12000, image: 'https://via.placeholder.com/300x200?text=Планшет' },
        { id: 5, name: 'Мишка', price: 800, image: 'https://via.placeholder.com/300x200?text=Мишка' },
        { id: 6, name: 'Клавіатура', price: 1500, image: 'https://via.placeholder.com/300x200?text=Клавіатура' }
    ];

    return (
        <div className="goods-gallery">
            <h2>Галерея товарів</h2>
            <div className="goods-grid">
                {goods.map(good => (
                    <GoodsCard
                        key={good.id}
                        image={good.image}
                        name={good.name}
                        price={good.price}
                    />
                ))}
            </div>
        </div>
    );
}

