JS Counter Program 🖥️

Overview 📝

This is a simple JavaScript counter application designed to showcase my JavaScript skills. The project demonstrates the use of DOM manipulation, event handling, and arrow functions in a practical, interactive example.

Features ✨

Increase, decrease, or reset the counter.

Dynamic updates to the displayed number using DOM manipulation.

Modern arrow functions used as callbacks for cleaner, concise code.

Responsive button design with hover and active effects.

Files 📁

index.html → Contains the structure of the counter and buttons.

index.js → Implements the counter logic and event handling.

style.css → Styles the counter and buttons for a polished look.

How It Works ⚡

The counter is initialized at 0.

Clicking Increase increments the counter.

Clicking Decrease decrements the counter.

Clicking Reset sets the counter back to 0.

All buttons update the h1 element dynamically using updateCounter() function.

JS Code Example:

let counter = 0;

function updateCounter() {
    counterText.textContent = counter;
}

document.getElementById('numberIncrease').onclick = () => updateCounter(counter++);
document.getElementById('numberDecrease').onclick = () => updateCounter(counter--);
document.getElementById('numberReset').onclick = () => updateCounter(counter = 0);

Styling 🎨

Font: "Press Start 2P" for a retro game-inspired look.

Buttons change color on hover and simulate a press using border-style.

Centered counter and buttons for clean layout.

Purpose 💡

The main purpose of this project is to demonstrate my JavaScript proficiency. It serves as a small, self-contained example of how I can use JS for interactive front-end functionality.
