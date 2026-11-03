// Konar Wheel Animation 
function KonarkWheelAnimation() {
      const KonarkWheel = document.querySelector("#konarkWheel")

      gsap.set(KonarkWheel, {
            display: "block",
            opacity: 0
      });

      gsap.to(KonarkWheel, {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                  trigger: ".page2",
                  scroller: "body",
                  start: "top 99%",
                  end: "top 80%",
                  scrub: 1
            }
      });


      // MASTER TIMELINE
      const timeline = gsap.timeline({
            scrollTrigger: {
                  trigger: ".page2",
                  scroller: "body",
                  scrub: 1,
                  start: "top 80%",
                  endTrigger: ".page4",
                  end: "top 5%"
            }
      });


      // PAGE 2
      timeline.to(KonarkWheel, {
            rotation: 360,
            x: "14vw",
            y: "65vh",
            duration: 1
      });


      // PAGE 3
      timeline.to(KonarkWheel, {
            rotation: 0,
            x: "-47vw",
            y: "165vh",
            duration: 1
      });


      // PAGE 4
      timeline.to(KonarkWheel, {
            rotation: 180,
            x: "-17vw",
            y: "275vh",
            duration: 1
      });



}


// Falling Lotus Petals animation for overall the website
function LotusPetalFallingAnimation() {
      let canvas = document.querySelector("#lotusPetal")
      let ctx = canvas.getContext('2d')

      let positionX = 0;
      let positionY = 0;
      let lotusPetalArray = []
      let numberOfPetals = 20



      // Resetting the canvas width and height Whenever the window is resized
      function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
      }
      resizeCanvas()
      window.addEventListener("resize", resizeCanvas);

      class lotusParticle {
            constructor(x, y) {
                  this.x = x;
                  this.y = y;

                  this.size = Math.random() * 10 + 3;
                  this.directionX = (Math.random() * 2 - 1);
                  this.directionY = Math.random() * 1.5 + 0.5;

                  this.velocityX = Math.random() * 0.5 - 0.25;
                  this.velocityY = Math.random() * 1 + 0.5;

                  this.angle = Math.random() * Math.PI * 2;
                  this.swingSpeed = Math.random() * 0.03 + 0.01;
                  this.swingStrength = Math.random() * 0.05 + 0.02;

                  this.rotation = 90
                  this.rotationSpeed = .5
            }

            draw() {
                  ctx.save();

                  ctx.translate(this.x, this.y);
                  ctx.rotate(this.rotation * Math.PI / 180);

                  const s = this.size;

                  const gradient = ctx.createLinearGradient(
                        0, -s * 1.3,
                        0, s
                  );

                  gradient.addColorStop(0, "#f8d4d4");
                  gradient.addColorStop(0.35, "#ee9a9a");
                  gradient.addColorStop(1, "#c84d5d");

                  ctx.fillStyle = gradient;

                  ctx.beginPath();

                  // Top
                  ctx.moveTo(0, -s * 1.35);
                  // Left upper curve
                  ctx.bezierCurveTo(-s * 0.35, -s * 1.15, -s * 0.85, -s * 0.75, -s * 0.95, -s * 0.15);
                  // Left lower curve
                  ctx.bezierCurveTo(-s * 1.00, s * 0.40, -s * 0.55, s * 0.85, 0, s);
                  // Right lower curve
                  ctx.bezierCurveTo(s * 0.55, s * 0.85, s * 1.00, s * 0.40, s * 0.95, -s * 0.15);
                  // Right upper curve
                  ctx.bezierCurveTo(s * 0.85, -s * 0.75, s * 0.35, -s * 1.15, 0, -s * 1.35);

                  ctx.closePath();
                  ctx.fill();

                  // Subtle center vein
                  ctx.beginPath();
                  ctx.moveTo(0, -s * 1.15);
                  ctx.quadraticCurveTo(
                        s * 0.08,
                        -s * 0.1,
                        0,
                        s * 0.85
                  );

                  ctx.strokeStyle = "rgba(160, 60, 70, 0.25)";
                  ctx.lineWidth = Math.max(0.5, s * 0.06);
                  ctx.stroke();

                  ctx.restore();
            }
            update() {
                  // Smooth left-right movement
                  this.angle += this.swingSpeed;

                  this.velocityX += Math.sin(this.angle) * this.swingStrength;

                  // Prevent it from moving too fast horizontally
                  this.velocityX = Math.max(-1.5, Math.min(1.5, this.velocityX));

                  // Move
                  this.x += this.velocityX;
                  this.y += this.velocityY;

                  // Rotate
                  if (this.rotation >= 110) {
                        this.rotationSpeed = -Math.abs(this.rotationSpeed);
                  }
                  if (this.rotation <= 60) {
                        this.rotationSpeed = Math.abs(this.rotationSpeed);
                  }
                  this.rotation += this.rotationSpeed;

                  // Reset when it reaches the bottom
                  if (this.y > canvas.height + this.size) {
                        this.y = -this.size;
                        this.x = Math.random() * canvas.width;
                        this.velocityX = Math.random() * 0.5 - 0.25;
                        this.angle = Math.random() * Math.PI * 2;
                  }
            }
      }
      // Adding number of lotus petal which will appear
      function init() {
            for (i = 1; i <= numberOfPetals; i++) {
                  positionX = (Math.random() * (canvas.width - 50) + 25);
                  positionY = Math.random() * canvas.height;

                  lotusPetalArray.push(new lotusParticle(positionX, positionY))
            }
      }
      init()
      function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Calling the functions for the lotus petal animations
            lotusPetalArray.forEach(p => {
                  p.draw();
                  p.update();
            });

            requestAnimationFrame(animate)
      }
      animate()
}


// Cursor Revel The hidden parts of the hero section
function RevelHeroSection() {
      let canvas = document.querySelector("#PhotoLayer");
      let ctx = canvas.getContext('2d')

      const hero = document.querySelector("#hero");

      // Setting variables and image
      let mouseX = 0;
      let mouseY = 0;
      let radius = 220;

      let cursorInside = true;

      const image = new Image()
      image.src = "img/WheelBackground.png";

      function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.drawImage(image, -10, 0, canvas.width, canvas.height)
      }
      window.addEventListener("resize", resizeCanvas);

      window.addEventListener("mousemove", (m) => {
            mouseX = m.clientX;
            mouseY = m.clientY;

            const rect = hero.getBoundingClientRect();

            cursorInside =
                  mouseX >= rect.left &&
                  mouseX <= rect.right &&
                  mouseY >= rect.top &&
                  mouseY <= rect.bottom;

      })
      // Torch effect
      function torchCursor() {

            ctx.globalCompositeOperation = "source-over";

            ctx.drawImage(image, -10, 0, canvas.width, canvas.height)

            ctx.font = "bold 18vw 'Josefin Sans'";
            ctx.fillStyle = "#dae3af";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText("JoyJeet Roy", canvas.width / 2, canvas.height / 2)


            if (cursorInside) {
                  const radialGradient = ctx.createRadialGradient(
                        mouseX, mouseY, 20,
                        mouseX, mouseY, radius
                  );

                  radialGradient.addColorStop(.9, "rgba(0,0,0,1)");
                  radialGradient.addColorStop(1, "rgba(0,0,0,0)");

                  ctx.globalCompositeOperation = "destination-out";

                  ctx.fillStyle = radialGradient;
                  ctx.beginPath();
                  ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
                  ctx.fill();
            }
            requestAnimationFrame(torchCursor)
      }

      image.onload = function () {
            resizeCanvas()
            torchCursor()

      }

}


// Custom cursor follow effect
function cursorFollowEffect() {
      const canvas = document.querySelector("#CustomCursor");
      const ctx = canvas.getContext('2d')

      let mouseX = 0
      let mouseY = 0

      let particleArray = []

      function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
      }
      window.addEventListener("resize", resizeCanvas);

      resizeCanvas()

      window.addEventListener("mousemove", (m) => {
            mouseX = m.clientX;
            mouseY = m.clientY;


            particleArray.push(new Particles(mouseX, mouseY))
      })

      class Particles {
            constructor(x, y) {
                  this.x = x;
                  this.y = y;
                  this.size = 5;
                  this.weight = Math.random() * (.5 + 0.2) - 0.2
                  this.directionX = Math.random() * (1 + 1) - 1
                  this.opacity = 1
                  this.color = [`57, 160, 86`, `158, 209, 172`, `39, 107, 58`]
                  this.colorIndex = Math.floor(Math.random() * this.color.length)
            }

            draw() {
                  this.opacity -= 0.03
                  ctx.fillStyle = `rgba(${this.color[this.colorIndex]}, ${this.opacity})`;
                  ctx.beginPath()
                  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, 1);
                  ctx.closePath()
                  ctx.fill()
            }


            update() {
                  this.y += this.weight;
                  this.x += this.directionX;
            }
      }

      function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = "#217a33";
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 8, 0, Math.PI * 2, 1);
            ctx.fill()
            ctx.closePath()


            for (let i = particleArray.length - 1; i >= 0; i--) {

                  particleArray[i].draw();
                  particleArray[i].update();

                  if (particleArray[i].opacity <= 0) {
                        particleArray.splice(i, 1);
                  }
            }
            // 
            requestAnimationFrame(animate)
      }

      animate()
}

RevelHeroSection()
LotusPetalFallingAnimation()
KonarkWheelAnimation()
cursorFollowEffect()

let resizeTimer;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 200);
});