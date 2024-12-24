import React, { Component } from 'react';

// Функціональний компонент Image
function ImageCom(props) {
    return (
        <div>
            <a href="https://sarny-rada.gov.ua/">
                <img
                    id="lviv-image"
                    height={props.height}
                    src="https://sarny-rada.gov.ua/uploads/posts/2021-08/1628088003_komunalnyky-blahoustroyuyut-dytyachi-ihrovi-maydan20210802_6304.jpg"
                    alt="Фото Сарн"
                />
            </a>
        </div>
    );
}

// Класовий компонент Content
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 350,
        };
    }

    increaseSize = () => {
        this.setState({ height: this.state.height + 30 });
    };

    decreaseSize = () => {
        this.setState({ height: Math.max(this.state.height - 30, 30) });
    };

    render() {
        return (
            <main>
                <h4>Хобі</h4>
                <ul>
                    <li>Футбол</li>
                    <li>Комп'ютерні ігри</li>
                    <li>Бокс</li>
                </ul>
                <h4>Улюблені фільми</h4>
                <ol>
                    <li>Грейхаунд</li>
                    <li>Один дома</li>
                    <li>3 балбеса</li>
                </ol>
                <p>
                    <b>Сарни</b> — Це місто в якому я народився, тому воно для мене найкрасивіше
                </p>
                <ImageCom height={this.state.height} />
                <div>
                    <button onClick={this.increaseSize}>Збільшити зображення</button>
                    <button onClick={this.decreaseSize}>Зменшити зображення</button>
                </div>
            </main>
        );
    }
}

export default Content;
