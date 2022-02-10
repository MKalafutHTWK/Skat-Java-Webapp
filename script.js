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
            shuffled_deck: [],
            player_turn: 1
        };
    }
    possible_turn(i, p) {
        const deck = this.state.shuffled_deck.slice();
        
        if (p == 1) {
            var player_hand = deck.slice(0, 10);
            //console.log(player_hand);
            //console.log("p1");
        }
        if (p == 2) {
            var player_hand = deck.slice(10, 20);
            //console.log(player_hand);
            //console.log("p2");
        }
        if (p == 3) {
            var player_hand = deck.slice(20, 30);
            //console.log(player_hand);
            //console.log("p3");
        }
        if (deck[32] != "") {
            if (deck[32].includes("♦")) {
                //console.log("♦");
                //console.log(player_hand.filter(s => s.includes("♦")).length == 0);
                if (deck[i].includes("♦")) {
                    //console.log("True");
                    return true;

                }
                else if (player_hand.filter(s => s.includes("♦")).length == 0) {
                    //console.log("True");
                    return true;
                }
                else {
                    //console.log("False");
                    return false;
                }
            }
            if (deck[32].includes("♥")) {
                //console.log("♥");
                //console.log(player_hand.filter(s => s.includes("♥")).length == 0);
                if (deck[i].includes("♥")) {
                    return true;
                }
                else if (player_hand.filter(s => s.includes("♥")).length == 0) {
                    //console.log("true");
                    return true;
                }
                else {
                    return false;
                }
            }
            if (deck[32].includes("♠")) {
                //console.log("♠");
                //console.log(player_hand.filter(s => s.includes("♥")).length == 0);
                if (deck[i].includes("♠")) {
                    return true;
                }
                else if (player_hand.filter(s => s.includes("♥")).length == 0) {
                    //console.log("true");
                    return true;
                }
                else {
                    return false;
                }
            }
            if (deck[32].includes("♣")) {
                //console.log("♣");
                //console.log(player_hand.filter(s => s.includes("♣")).length == 0);
                if (deck[i].includes("♣")) {
                    return true;
                }
                else if (player_hand.filter(s => s.includes("♥")).length == 0) {
                    //console.log("true");
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return true;
        }
    }
    turn_win(p){
        const deck = this.state.shuffled_deck.slice();
        var card1 = deck[32];
        var card2 = deck[33];
        var card3 = deck[34];
        angespielt = deck[32].slice(deck[32].length-1);
        if(deck[33].includes(angespielt)){

        }
        
        return next_player
    }
    handleClick(i, p) {
        const deck = this.state.shuffled_deck.slice();
        if (((p == 1 && i < 10) ||
            (p == 2 && 9 < i && i < 20) ||
            (p == 3 && 19 < i && i < 30)) &&
            this.possible_turn(i, p)) {
            
            if (deck[32] == "" || deck[32] == null) {
                deck[32] = deck[i];
            }
            else if (deck[33] == "" || deck[33] == null) {
                deck[33] = deck[i];
            }
            else if (deck[34] == "" || deck[34] == null) {
                deck[34] == deck[i];
                //this.turn_win(p);
                deck[32] = "";
                deck[33] = "";
                deck[34] = "";
            }
            deck[i] = "";
            if (p == 3) {
                p = 1;
            }
            else {
                p = p + 1;
            }
            this.setState({ shuffled_deck: deck, player_turn: p });
        }
    }
    handleClickShuffle() {
        const deck = this.state.deck.slice();
        const shuffled_deck = [];
        for (let i = 32; i > 0; i--) {
            let r = getRandomInt(i);
            shuffled_deck.push(deck[r]);
            deck.splice(r, 1);
        }
        shuffled_deck.push("");
        this.setState({ shuffled_deck: shuffled_deck });
    }
    renderButton() {
        return React.createElement("button", { onClick: () => this.handleClickShuffle() }, "Shuffle");
    }
    renderCard(i) {
        return (React.createElement(Card, { value: this.state.shuffled_deck[i], onClick: () => this.handleClick(i, this.state.player_turn) }));
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