function GoodsGallery() {
    const goods = [
        { id: 1, name: 'Ноутбук', price: 25000, image: 'img/goods/ноутбук.jpg' },
        { id: 2, name: 'Смартфон', price: 15000, image: 'img/goods/смартфон.jpg' },
        { id: 3, name: 'Навушники', price: 2500, image: 'img/goods/навушники.jpg' },
        { id: 4, name: 'Планшет', price: 12000, image: 'img/goods/планшет.jpg' },
        { id: 5, name: 'Мишка', price: 800, image: 'img/goods/мишка.jpg' },
        { id: 6, name: 'Клавіатура', price: 1500, image: 'img/goods/клавіатура.jpg' }
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
