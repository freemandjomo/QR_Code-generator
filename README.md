# 📱 QR Code Generator

<div align="center">

![QR Code Generator](https://img.shields.io/badge/QR%20Code-Generator-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A sleek and modern web application to instantly generate QR codes from any text or URL**

[Live Demo](#) • [Features](#features) • [Installation](#installation) • [Usage](#usage)

</div>

---

##  Features

- 🚀 **Instant Generation** - Create QR codes in real-time with a single click
- 🎨 **Modern UI** - Clean, responsive design with smooth animations
- 📝 **Versatile Input** - Supports both URLs and plain text
- ⚡ **Fast & Lightweight** - No dependencies, pure vanilla JavaScript
- 🎭 **Interactive** - Dynamic animations and hover effects
- 📱 **Responsive** - Works perfectly on all devices
- 🔄 **Auto-Clear** - QR code disappears when input is cleared

##  Use Cases

- Share website links quickly
- Generate contactless information cards
- Create WiFi connection QR codes
- Share social media profiles
- Generate event tickets
- Create product labels

##  Preview

The application features a centered card-based design with:
- **Input field** for text/URL entry
- **Generate button** with loading state
- **QR code display** with smooth fade-in animation
- **Auto-hide** functionality when input is cleared

##  Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, and transitions |
| **JavaScript (ES6)** | Core functionality and DOM manipulation |
| **QR Server API** | QR code generation backend |

##  Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
   ```

2. **Open in browser**
   ```bash
   # Simply open the HTML file in your preferred browser
   open QR_code.html
   # or
   start QR_code.html
   ```

No build process or dependencies required! 🎉

##  Usage

1. **Enter your content**
   - Type any text or paste a URL into the input field

2. **Generate**
   - Click the "Generate QR Code" button
   - Watch the button text change to "Generating QR Code..."

3. **View & Save**
   - Your QR code appears with a smooth animation
   - Right-click the image to save it

4. **Clear**
   - Delete the input text to hide the QR code automatically

##  Code Structure

```
qr-code-generator/
│
├── QR_code.html          # Main HTML structure
├── QR_Code.css           # Styles and animations
├── QR-Code.js            # JavaScript functionality
└── README.md             # Project documentation
```

## 🎨 Customization

### Change Color Scheme
Edit the CSS color values in `QR_Code.css`:
```css
body {
    background-color: rgb(16, 162, 219); /* Main background */
}

#CodeBtn {
    background-color: rgb(16, 162, 219); /* Button color */
}
```

### Adjust QR Code Size
Modify the API URL in `QR-Code.js`:
```javascript
qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrvalue}`;
// Change 175x175 to your preferred size (e.g., 250x250)
```

##  Technical Details

### Key Features Implementation

**Dynamic QR Generation**
```javascript
button.onclick = function () {
    let qrvalue = input.value;
    if(!qrvalue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=175x175&data=${qrvalue}`;
}
```

**Smooth Animations**
```css
.wrapper.active {
    height: 450px;
    transition: height 0.2s ease;
}
```

**Auto-Clear Functionality**
```javascript
input.onkeyup = function () {
    if(!input.value) {
        wrapper.classList.remove("active");
    }
}
```

## 🌐 API Reference

This project uses the free [QR Server API](https://goqr.me/api/):
- **Endpoint**: `https://api.qrserver.com/v1/create-qr-code/`
- **Parameters**: 
  - `size`: QR code dimensions (e.g., 175x175)
  - `data`: Text or URL to encode

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Opera (Latest)

## 📸 Screenshots

### Main Interface
![QR_Code Generator Interface](https://github.com/freemandjomo/QR_Code-generator/blob/main/Screenshot%202025-12-26%20214059.png)

### Customization Options
![Customization Panel](https://github.com/freemandjomo/QR_Code-generator/blob/main/Screenshot%202025-12-26%20214112.png)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Future Enhancements

- [ ] Download QR code as PNG/SVG
- [ ] Customizable QR code colors
- [ ] Error correction level options
- [ ] QR code history/favorites
- [ ] Batch QR code generation
- [ ] Dark mode toggle
- [ ] Copy to clipboard functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Freeman Djomo**

- GitHub: [@freemandjomo](https://github.com/freemandjomo)

## 🙏 Acknowledgments

- QR Server API for providing free QR code generation
- Font Awesome for icons (if applicable)
- The open-source community for inspiration

---

<div align="center">

**If you found this project helpful, please consider giving it a ⭐!**

Made with JavaScript

</div>
