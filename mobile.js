
class Mobile {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.powerOn = false;
        this.battery = 100;
        this.draftMessage = "";
        this.inbox = [];
        this.sentMessages = [];
    }

    checkPowerStatus() {
        return this.powerOn;
    }

    powerToggle() {
        this.powerOn = !this.powerOn;
    }

    chargeBattery() {
        if (this.battery < 100) {
            this.battery += 10;
        }
    }

    composeMessage(message) {
        if (this.powerOn) {
            this.draftMessage = message;
            this.battery -= 1;
        }
    }

    receiveMessage(message, sender) {
        if (this.powerOn) {
            this.inbox.push({ sender, message });
            this.battery -= 1;
        }
    }

    sendMessage(receiverMobile) {
        if (this.powerOn && this.draftMessage !== "") {
            receiverMobile.receiveMessage(this.draftMessage, `${this.brand} ${this.model}`);
            this.sentMessages.push({ receiver: receiverMobile, message: this.draftMessage });
            this.draftMessage = "";
            this.battery -= 1;
        }
    }

    viewInbox() {
        if (this.powerOn) {
            return this.inbox;
        }
        return "Phone is off.";
    }

    viewSentMessages() {
        if (this.powerOn) {
            return this.sentMessages;
        }
        return "Phone is off.";
    }
}


const nokia = new Mobile("Nokia", "3310");
const iphone = new Mobile("iPhone", "12");

nokia.powerToggle(); // Bật điện thoại Nokia
nokia.composeMessage("Hello iPhone!"); // Soạn tin nhắn
nokia.sendMessage(iphone); // Gửi tin nhắn cho iPhone

iphone.powerToggle(); // Bật điện thoại iPhone
console.log(iphone.viewInbox()); // Hiển thị hộp thư đế