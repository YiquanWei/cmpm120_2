class CreditsScene extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create() {
        this.scrollSpeed = 35;

        this.titleText = this.add.text(400, 80, "Credits", {
            fontSize: "42px",
            color: "#ffffff",
            align: "center"
        }).setOrigin(0.5);

        this.creditsText = this.add.text(400, 180,
            "Game by Yiquan Wei\n\n\n" +

            "Assets\n\n" +

            "Monkey head and player icon:\n" +
            "Kenney Animal Pack\n" +
            "https://kenney.nl/assets/animal-pack\n\n" +

            "Question mark and exclamation mark enemies:\n" +
            "Kenney Game Icons\n" +
            "https://kenney.nl/assets/game-icons\n\n" +

            "Sound effects:\n" +
            "Kenney Interface Sounds\n" +
            "https://kenney.nl/assets/interface-sounds\n\n" +

            "Background music:\n" +
            "Made by me in GarageBand\n\n\n" +

            "Made with Phaser\n" +
            "For CMPM 120 Gallery Shooter Assignment\n\n\n" +

            "Thank you for playing!",
            {
                fontSize: "22px",
                color: "#dddddd",
                align: "center",
                lineSpacing: 8,
                wordWrap: { width: 720 }
            }
        ).setOrigin(0.5, 0);

        this.returnText = this.add.text(400, 560, "Press T to return to Title", {
            fontSize: "22px",
            color: "#ffffff",
            align: "center"
        }).setOrigin(0.5);

        this.keyT = this.input.keyboard.addKey("T");
        this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update(time, delta) {
        let dt = delta / 1000;

        // auto scroll upward
        this.creditsText.y -= this.scrollSpeed * dt;

        // optional manual scroll
        if (this.keyUp.isDown) {
            this.creditsText.y += 90 * dt;
        }

        if (this.keyDown.isDown) {
            this.creditsText.y -= 90 * dt;
        }

        // reset when it scrolls fully away
        if (this.creditsText.y < -this.creditsText.height) {
            this.creditsText.y = 620;
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyT)) {
            this.scene.start("titleScene");
        }
    }
}

window.CreditsScene = CreditsScene;