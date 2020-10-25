
$(function () {



        loadUserInfo()
        .then(function (response) {
            response.forEach(function (user) {
                user = new User(user.firstname, user.lastname, user.picture);
                $(".profile-container").append('<div class="profile">' + '<div> <img id="theImg" src="./res/images/' + user.picture + '" /></div>' + '<div>' + user.firstname + ' ' + user.lastname + '</div><div> <button class="button-follow">Follow</button></div></div>');
                console.log('displayedinfo')
            });
        })
        .catch(function () {
            console.log('Error loading user info')
        });

        $(".button-follow").click(function() { 
            console.log("vajutasin nupule")
            if ($(this).text() == "Follow") { 
                $(this).text("Followed"); 
            } else { 
                $(this).text("Followed"); 
            }; 
        });



});

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

