if ("geolocation" in navigator) {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;
    document.getElementById("latitude").textContent = crd.latitude.toFixed(5);
    document.getElementById("longitude").textContent = crd.longitude.toFixed(5);
    document.getElementById("accuracy").textContent = `${crd.accuracy} meters`;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`Accuracy: ${crd.accuracy} meters.`);

    document.getElementById("locationContainer").classList.toggle("hidden");
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == "doctor@nhs.net" && password == "password") {
      window.location.replace("/record.html");
    } else {
      document.getElementById("message").textContent =
        "The credentials you provided are wrong.";
    }
    return;
  });
