document.addEventListener('DOMContentLoaded', function() {
    const element7 = document.getElementById('element7');
    const element8 = document.querySelector('#element8');

    let element7Bg = '#ff6b6b';
    let element7Text = '#ffffff';
    let element8Bg = '#95e1d3';
    let element8Text = '#000000';

    element7.addEventListener('click', function() {
        const tempBg = element7Bg;
        const tempText = element7Text;
        
        element7Bg = tempText;
        element7Text = tempBg;
        
        this.style.backgroundColor = element7Bg;
        this.style.color = element7Text;
    });

    element8.addEventListener('click', function() {
        const tempBg = element8Bg;
        const tempText = element8Text;
        
        element8Bg = tempText;
        element8Text = tempBg;
        
        this.style.backgroundColor = element8Bg;
        this.style.color = element8Text;
    });

    const imageContainer = document.getElementById('image-container');
    const mainImage = document.getElementById('main-image');
    let currentImageSize = 400; 

    function addImage() {
        if (!mainImage) {
            const img = document.createElement('img');
            img.id = 'main-image';
            img.src = 'img/lutsk.jpg';
            img.alt = 'Луцьк';
            img.width = currentImageSize;
            img.style.display = 'block';
            img.style.margin = '20px 0';
            img.style.transition = 'transform 0.3s';
            
            const link = document.createElement('a');
            link.href = 'https://www.lutskrada.gov.ua/';
            link.appendChild(img);
            
            imageContainer.insertBefore(link, imageContainer.querySelector('.image-controls'));
        } else if (mainImage.style.display === 'none') {
            mainImage.style.display = 'block';
            mainImage.parentElement.style.display = 'block';
        }
    }

    function enlargeImage() {
        if (mainImage && mainImage.style.display !== 'none') {
            currentImageSize += 50;
            mainImage.width = currentImageSize;
        }
    }

    function reduceImage() {
        if (mainImage && mainImage.style.display !== 'none') {
            currentImageSize = Math.max(100, currentImageSize - 50);
            mainImage.width = currentImageSize;
        }
    }

    function deleteImage() {
        if (mainImage) {
            mainImage.style.display = 'none';
            mainImage.parentElement.style.display = 'none';
        }
    }

    document.getElementById('btn-add').addEventListener('click', addImage);
    document.getElementById('btn-enlarge').addEventListener('click', enlargeImage);
    document.getElementById('btn-reduce').addEventListener('click', reduceImage);
    document.getElementById('btn-delete').addEventListener('click', deleteImage);
});

