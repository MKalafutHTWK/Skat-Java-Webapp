class Card extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("button", { className: "square", onClick: this.props.onClick },
      this.props.value));


  }}


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [
      "7#",
      "8#",
      "9#",
      "10#",
      "U#",
      "O#",
      "K#",
      "A#",
      "7<3",
      "8<3",
      "9<3",
      "10<3",
      "U<3",
      "O<3",
      "K<3",
      "A<3",
      "7>3",
      "8>3",
      "9>3",
      "10>3",
      "U>3",
      "O>3",
      "K>3",
      "A>3",
      "7+",
      "8+",
      "9+",
      "10+",
      "U+",
      "O+",
      "K+",
      "A+"] };


  }

  handleClick(i) {}

  renderCard(i) {
    return /*#__PURE__*/(
      React.createElement(Card, { value: this.state.deck[i], onClick: () => this.handleClick(i) }));

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "table" },
      this.renderCard(0),
      this.renderCard(1),
      this.renderCard(2)), /*#__PURE__*/

      React.createElement("div", { className: "player" }, "Player1",

      this.renderCard(3),
      this.renderCard(4),
      this.renderCard(5),
      this.renderCard(6),
      this.renderCard(7),
      this.renderCard(8),
      this.renderCard(9)), /*#__PURE__*/

      React.createElement("div", { className: "player" }, "Player2",

      this.renderCard(10),
      this.renderCard(11),
      this.renderCard(12),
      this.renderCard(13),
      this.renderCard(14),
      this.renderCard(15),
      this.renderCard(16)), /*#__PURE__*/

      React.createElement("div", { className: "player" }, "Player3",

      this.renderCard(17),
      this.renderCard(18),
      this.renderCard(19),
      this.renderCard(20),
      this.renderCard(21),
      this.renderCard(22),
      this.renderCard(23))));



  }}


class Game extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Table, null);
  }}


// ========================================

ReactDOM.render( /*#__PURE__*/React.createElement(Game, null), document.getElementById("root"));