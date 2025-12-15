function App() {
    return (
        <div className="app">
            <Header />
            <Content />
            <Image 
                src="img/lutsk.jpg" 
                alt="Луцьк" 
                link="https://www.lutskrada.gov.ua/"
            />
            <GoodsGallery />
        </div>
    );
}
