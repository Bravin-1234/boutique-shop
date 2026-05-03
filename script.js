function buyNow(productName){

    let phone = "254737035313";

    let message = "Hello, I want to order: " + productName;

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    alert("Redirecting you to WhatsApp to order " + productName);

    window.open(url, "_blank");
}