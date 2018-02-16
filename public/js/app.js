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
  let header = document.getElementById('header');
  header.className = 'header-disabled';
  let dataUser = data.values[0];
  console.log(dataUser);
  let fullName = dataUser.firstName + ' ' + dataUser.lastName;
  let emailAddress = dataUser.emailAddress;
  let location = dataUser.location.name;
  let photo = dataUser.pictureUrl;
  let headline = dataUser.headline;
  let perfilUserLinkedin = dataUser.publicProfileUrl;
  let dataUserJob = dataUser.positions.values;
  let photoUser = document.querySelector('.image-user');
  let nameUser = document.querySelector('.name-user');
  photoUser.setAttribute('src', photo);
  nameUser.textContent = fullName;
  let boxUser = document.getElementById('box-info-user');
  boxUser.innerHTML = '<div><img src="./assets/icons/envelope.png" alt=""><span> '+ emailAddress + '</span></div>'+
          '<div><img src="./assets/icons/planet-earth.png" alt=""><span> ' + location + '</span></div>'+
          '<div><img src="./assets/icons/college-graduation.png" alt=""><span> ' + headline + '</span></div>'+
          '<div><img src="./assets/icons/linkedin.png" alt=""><span> ' + perfilUserLinkedin + '</span></div>';         
}

// Manejar una respuesta de error de la llamada API
function onError(error) {
  console.log(error);
}

