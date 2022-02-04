"use strict";
class Card extends React.Component {
    render() {
        return (React.createElement("button", { className: "square", onClick: this.props.onClick }, this.props.value));
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: [
                "7♦",
                "8♦",
                "9♦",
                "10♦",
                "U♦",
                "O♦",
                "K♦",
                "A♦",
                "7♥",
                "8♥",
                "9♥",
                "10♥",
                "U♥",
                "O♥",
                "K♥",
                "A♥",
                "7♠",
                "8♠",
                "9♠",
                "10♠",
                "U♠",
                "O♠",
                "K♠",
                "A♠",
                "7♣",
                "8♣",
                "9♣",
                "10♣",
                "U♣",
                "O♣",
                "K♣",
                "A♣"
            ],
            shuffled_deck: []
        };
    }
    handleClick(i) { }
    handleClickShuffle() {
        const deck = this.state.deck.slice();
        const shuffled_deck = [];
        for (let i = 32; i > 0; i--) {
            let r = getRandomInt(i);
            shuffled_deck.push(deck[r]);
            deck.splice(r, 1);
        }
        this.setState({ shuffled_deck: shuffled_deck });
    }
    renderButton() {
        return React.createElement("button", { onClick: () => this.handleClickShuffle() }, "Shuffle");
    }
    renderCard(i) {
        return (React.createElement(Card, { value: this.state.shuffled_deck[i], onClick: () => this.handleClick(i) }));
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", null, this.renderButton()),
            React.createElement("div", { className: "table" },
                "Table",
                this.renderCard(32),
                this.renderCard(33),
                this.renderCard(34)),
            React.createElement("div", { className: "skat" },
                "Skat",
                this.renderCard(30),
                this.renderCard(31)),
            React.createElement("div", { className: "player" },
                "Player1",
                this.renderCard(0),
                this.renderCard(1),
                this.renderCard(2),
                this.renderCard(3),
                this.renderCard(4),
                this.renderCard(5),
                this.renderCard(6),
                this.renderCard(7),
                this.renderCard(8),
                this.renderCard(9)),
            React.createElement("div", { className: "player" },
                "Player2",
                this.renderCard(10),
                this.renderCard(11),
                this.renderCard(12),
                this.renderCard(13),
                this.renderCard(14),
                this.renderCard(15),
                this.renderCard(16),
                this.renderCard(17),
                this.renderCard(18),
                this.renderCard(19)),
            React.createElement("div", { className: "player" },
                "Player3",
                this.renderCard(20),
                this.renderCard(21),
                this.renderCard(22),
                this.renderCard(23),
                this.renderCard(24),
                this.renderCard(25),
                this.renderCard(26),
                this.renderCard(27),
                this.renderCard(28),
                this.renderCard(29))));
    }
}
class Game extends React.Component {
    render() {
        return React.createElement(Table, null);
    }
}
// ========================================
ReactDOM.render(React.createElement(Game, null), document.getElementById("root"));