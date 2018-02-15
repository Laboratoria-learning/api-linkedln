// Setup an event listener to make an API call once auth is complete
// Configure un detector de eventos para realizar una llamada API una vez que se complete la autenticación
function onLinkedInLoad() {
    IN.Event.on(IN, "auth", getProfileData);

}
// Use the API call wrapper to request the member's profile data
function getProfileData() {
    IN.API.Profile("me")
    .fields([
            "firstName","lastName","headline","positions:(company,title,summary,startDate,endDate,isCurrent)","industry",
            "location:(name,country:(code))","pictureUrl","publicProfileUrl","emailAddress",
            "educations","dateOfBirth"])
    .result(displayProfileData).error(onError);
    window
}

// Handle the successful return from the API call
function displayProfileData(data) {
    var user = data.values[0];
    // console.log(data);
    console.log(user);
}

// Handle an error response from the API call
// Manejar una respuesta de error de la llamada API
function onError(error) {
    console.log(error);
}

