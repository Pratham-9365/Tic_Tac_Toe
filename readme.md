# Tic Tac Toe Game

A simple, interactive Tic Tac Toe game built with **HTML**, **CSS**, and **JavaScript**.  
This project demonstrates DOM manipulation, event handling, and basic game logic in JavaScript.

---

## Features

- **Two-player gameplay** (O and X)
- **Win detection** for both players
- **Draw detection**
- **Reset** and **New Game** buttons
- **Popup message** for win/draw
- **Responsive and clean UI**
- **No unwanted scrollbars**; page has a colored background and can be easily extended with a border

---

## File Structure

```
/tic tac toe/
│
├── index.html      # Main HTML file
├── index.css       # Stylesheet for the game
└── index.js        # JavaScript game logic
```

---

## How to Use

1. **Clone or Download** this repository.
2. Open `index.html` in your browser.
3. Play by clicking on the boxes. Player O starts first.
4. When a player wins or the game is a draw, a popup message appears.
5. Click **New Game** or **Reset** to start over.

---

## Code Overview

### HTML (`index.html`)

- Contains a `.container` with a `.game-box` holding 9 buttons (the game grid).
- Popup message (`#msg-container`) for win/draw notifications.
- **Reset** and **New Game** buttons for restarting the game.

### CSS (`index.css`)

- Styles the layout, buttons, popup, and result message.
- Uses `outline` or background color for page styling.
- Responsive design with flexbox.
- `.hide` class is used to show/hide elements like the popup and result.

### JavaScript (`index.js`)

- **Game State:**  
  - `turnO` tracks whose turn it is.
  - `count` counts the number of moves.
- **Game Logic:**  
  - `winningCombos` holds all possible win positions.
  - `checkWinner()` checks after every move if someone has won.
  - `showwinner(winner)` displays the winner and disables the board.
  - Draw is detected when all 9 moves are made and no winner.
- **UI Updates:**  
  - Both the popup (`#msg`) and result area (`#result`) are updated for win/draw.
  - `enableboxes()` and `disableboxes()` manage the board state.
  - `resetbutton()` resets the board and hides messages.

---


## Customization

- **Change Colors:**  
  Edit the CSS variables or color values in `index.css`.
- **Change Board Size:**  
  This code is for 3x3 Tic Tac Toe. For larger boards, update the HTML and `winningCombos` in JS.

---

## Credits

- Developed by [Your Name]
- Inspired by classic Tic Tac Toe games

---

## License

This project is open source and free to use for
