function submitForm(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const dob = document.getElementById("dob").value;
    const profession = document.getElementById("profession").value;
    const mobile = document.getElementById("mobile").value;
    const male = document.getElementById("male").checked ? "Male" : "";
    const female = document.getElementById("female").checked ? "Female" : "";

    const firstTime = document.getElementById("firstTime").value;
    const recommend = document.getElementById("recommend").value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const suggestions = document.getElementById("suggestions").value;

    document.getElementById("popupName").textContent = `${firstName} ${lastName}`;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupFirstTime").textContent = firstTime;
    document.getElementById("popupRecommend").textContent = recommend;
    document.getElementById("popupSatisfaction").textContent = satisfaction;
    document.getElementById("popupSuggestions").textContent = suggestions;

    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}