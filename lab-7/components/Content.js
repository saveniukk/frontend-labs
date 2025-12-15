class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element7Bg: '#ff6b6b',
            element7Text: '#ffffff',
            element8Bg: '#95e1d3',
            element8Text: '#000000'
        };
    }

    handleElement7Click = () => {
        this.setState(prevState => ({
            element7Bg: prevState.element7Text,
            element7Text: prevState.element7Bg
        }));
    };

    handleElement8Click = () => {
        this.setState(prevState => ({
            element8Bg: prevState.element8Text,
            element8Text: prevState.element8Bg
        }));
    };

    render() {
        return (
            <div className="content">
                <p>Освіта: <br />
                    Луцький ліцей №3, 2012-2023 <br />
                    КПІ ім. Ігоря Сікорського, 2023-2027
                </p>

                <p>Хобі:</p>
                <ul>
                    <li>Спорт</li>
                    <li>Читання</li>
                    <li>Музика</li>
                </ul>

                <p>Улюблені фільми:</p>
                <ol 
                    id="element7"
                    onClick={this.handleElement7Click}
                    style={{
                        backgroundColor: this.state.element7Bg,
                        color: this.state.element7Text,
                        padding: '10px',
                        paddingLeft: '30px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, color 0.3s',
                        listStyleType: 'decimal',
                        listStylePosition: 'outside'
                    }}
                >
                    <li>Людина-павук</li>
                    <li>Втеча з Шоушенка</li>
                    <li>Перевізник</li>
                </ol>

                <p 
                    id="element8"
                    onClick={this.handleElement8Click}
                    style={{
                        backgroundColor: this.state.element8Bg,
                        color: this.state.element8Text,
                        padding: '10px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, color 0.3s'
                    }}
                >
                    <strong>Луцьк</strong> — місто з тисячолітньою історією, розташоване на заході України. 
                    Його архітектура поєднує середньовічні споруди, зокрема Замок Любарта, та сучасні міські квартали, створюючи унікальну гармонію старого й нового. 
                    Місто активно розвивається культурно: тут проходять театральні вистави, музичні фестивалі та науково-освітні заходи, що робить Луцьк цікавим і для місцевих і для туристів. 
                    З точки зору міського простору, Луцьк зберігає приємну атмосферу середньостатистичного європейського міста: 
                    компактні вулиці та зелені парки створюють комфортне середовище для життя і прогулянок.
                </p>
            </div>
        );
    }
}

