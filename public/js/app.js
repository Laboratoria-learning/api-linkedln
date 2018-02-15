// Configure un detector de eventos para realizar una llamada API una vez que se complete la autenticación
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}

// Use the API call wrapper to request the member's profile data
function getProfileData() {
  IN.API.Profile('me')
    .fields([
      'firstName', 'lastName', 'headline', 'positions:(company,title,summary,startDate,endDate,isCurrent)', 'industry',
      'location:(name,country:(code))', 'pictureUrl', 'publicProfileUrl', 'emailAddress',
      'educations', 'dateOfBirth'])
    .result(displayProfileData).error(onError);
}

// Handle the successful return from the API call
function displayProfileData(data) {
  let user = data.values[0];
  let firstName = user.firstName;
  let lastName = user.lastName;
  let emailAddress = user.emailAddress;
  let headline = user.headline;
  let boxUser = document.getElementById('box-user');
  boxUser.innerHTML = '<p class="text-center">' + firstName + ' ' + lastName + '<p>' +
    '<p  class="text-center">' + emailAddress + '</p>' +
    '<p  class="text-center">' + headline + '</p>';    
}

// Manejar una respuesta de error de la llamada API
function onError(error) {
  console.log(error);
}
