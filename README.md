# Konark Wheel --- Interactive Web Animation

An experimental frontend project inspired by the Konark Sun Temple. The
experience combines scroll-driven SVG animation, canvas-based particle
effects, and cursor interactions to explore motion design and visual
storytelling on the web.

> **Project status:** Experimental / learning project\
> **Live demo:** Add your deployed URL here\
> **Author:** Joyjeet Roy

## Demo Video

Watch the project in action:

[▶ Watch the Konark Wheel Demo](YOUR_GITHUB_VIDEO_URL)

## Screenshots



![Project hero preview](screenshots/hero.png)

  ---------------------------------------------------------------------------------------
  Scroll animation                               Cursor reveal and particle effects
  ---------------------------------------------- ----------------------------------------
  ![Scroll                                       ![Cursor
  animation](screenshots/scroll-animation.gif)   effect](screenshots/cursor-effect.gif)

  ---------------------------------------------------------------------------------------

## Features

-   **Scroll-driven Konark Wheel animation:** GSAP and ScrollTrigger
    control the wheel's opacity, position, and rotation as the visitor
    scrolls through the page sections.
-   **Cursor-reveal / torch effect:** A canvas layer uses a radial
    gradient and compositing to reveal part of the hero artwork around
    the pointer.
-   **Custom cursor trail:** A canvas-based cursor draws a pointer and
    fading particles that follow mouse movement.
-   **Falling lotus petals:** A particle system renders gradient-filled
    petals with rotation and gently varying horizontal movement.
-   **Multi-section visual composition:** Full-screen-style sections use
    distinct background imagery and typography to create a visual
    journey.
-   **Resize handling:** Canvas dimensions are updated on window resize,
    and ScrollTrigger is refreshed after resizing.

## Built With

-   HTML5
-   CSS3
-   JavaScript (Vanilla)
-   [GSAP](https://gsap.com/)
-   [GSAP
    ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
-   HTML Canvas API
-   Inline SVG
-   Google Fonts --- Josefin Sans and MedievalSharp

## How It Works

### 1. GSAP + ScrollTrigger

The `KonarkWheelAnimation()` function creates a GSAP timeline linked to
scrolling. The timeline moves and rotates the inline SVG wheel across
the `.page2`, `.page3`, and `.page4` sections. A separate ScrollTrigger
fades the wheel into view.

### 2. Canvas effects

The project uses separate canvas elements for different effects:

-   `#PhotoLayer` draws the hero artwork and text, then uses
    `destination-out` compositing with a radial gradient to create the
    cursor-reveal effect.
-   `#CustomCursor` draws the cursor and short-lived particles generated
    from mouse movement.
-   `#lotusPetal` renders the falling lotus-petal particles across the
    viewport.

Each canvas has its own animation loop using `requestAnimationFrame()`.

## Project Structure

The repository should contain the following files and assets. Keep the
image filenames and folder paths consistent with the references in
`style.css` and `script.js`.

``` text
konark-wheel/
├── index.html
├── style.css
├── script.js
├── KonarkWheel.svg
├── img/
│   ├── WheelBackground.png
│   ├── WheelBackgroundWithPhoto.png
│   ├── solar-system.jpg
│   └── TajMahal.jpg
└── screenshots/
    ├── hero.png
    ├── scroll-animation.gif
    └── cursor-effect.gif
```

The `img/` list reflects image paths referenced by the supplied source
files. Add any other image assets used by your local project. The wheel
is embedded inline in `index.html`; `KonarkWheel.svg` is also included
as a separate source asset.

## Run Locally

No package manager or build step is required by the supplied files. GSAP
and ScrollTrigger are loaded from jsDelivr CDN in `index.html`.

1.  Clone the repository:

    ``` bash
    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
    ```

2.  Open the project folder.

3.  Start a local static server (recommended), or open `index.html` in a
    browser.

For example, with the VS Code Live Server extension, right-click
`index.html` and select **Open with Live Server**.

An internet connection is required to load GSAP, ScrollTrigger, and the
Google Fonts referenced by the page.

## Developer

**Joyjeet Roy** — Frontend Developer

- LinkedIn: [Connect with me on LinkedIn](https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/)

## Notes

-   The custom cursor is designed for pointer-based desktop interaction.
    Touch devices do not have a conventional mouse cursor, so test the
    experience on mobile and consider providing a touch-friendly
    fallback.
-   The CSS currently hides the native cursor (`cursor: none`). Ensure a
    usable cursor or fallback is provided for devices and users who need
    it.
-   Check animation performance on lower-powered devices, especially
    because multiple canvas animation loops run continuously.
-   The current source uses fixed viewport-based positioning for parts
    of the wheel animation. Test different viewport sizes and adjust the
    motion values if needed.
-   Replace the placeholder screenshot paths above with real
    screenshots/GIFs before publishing the repository.
