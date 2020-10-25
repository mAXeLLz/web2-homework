let idx = 0
$(function () {


        loadUserInfo()
        .then(function (response) {
            response.forEach(function (user) {
                user = new User(user.firstname, user.lastname, user.picture);
                displayUserInfo(user);
                console.log('displayedinfo')
            });
        })
        .catch(function () {
            console.log('Error loading user info')
        });



});

function displayUserInfo(user) {
    $('#profile' + idx + '#name' + idx).text(user.firstname + " " + user.lastname);
    $('#profile' + idx +  '#picture' + idx).text(user.picture );
    idx += 1
}

function loadUserInfo() {
    return $.get(
        {
            url: './res/data/user.json',
            success: function (response) {
                console.log('Got the data')
               return response;
            },
            error: function () {
                alert('error')
            }
        }


    );
}
