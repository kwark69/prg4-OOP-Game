import { GameObject } from "./gameobject.js";
export class Dragon extends GameObject {
    constructor() {
        super("dragon");
        this.verticalSpeed = -.5;
        window.addEventListener("keyup", (e) => this.onKeyUpHandler(e));
        window.addEventListener("keydown", (e) => this.onKeyDownHandler(e));
        this.x = 150;
        this.y = 150;
    }
    onKeyUpHandler(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0;
        }
    }
    onKeyDownHandler(e) {
        switch (e.key) {
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
            default:
                break;
        }
    }
    update() {
        this.y += this.verticalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    crash() {
        this.div.classList.add("reddragon");
    }
}
//# sourceMappingURL=dragon.js.map