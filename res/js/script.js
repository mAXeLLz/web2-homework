
let idx = 0
let posts = []
$(function () {


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

        loadPostInfo()
            .then(function (response) {
                response.forEach(function (post) {
                    addPost(post)
                    console.log('displayedpost')
                });
            })
            .catch(function () {
                console.log('Error loading post info')
            });

        $(".button-follow").click(function () {
            console.log("vajutasin nupule")
            if ($(this).text() == "Follow") {
                $(this).text("Followed");
            } else {
                $(this).text("Followed");
            }
            ;
        });


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

    function loadPostInfo() {
        return $.get(
            {
                url: '././res/data/post.json',
                success: function (response) {
                    console.log('Got post info')
                    return response;
                },
                error: function () {
                    console.log('error')
                }
            }
        );
    }


    function addPost(post) {
        posts.push(post);
        const tableRow = `
    <div class="post">
        <div class="post-author">
          <span class="post-author-info">
            <img src=${post.picture} alt="Post author">
            <small>${post.name}</small>
          </span>
          <small>${post.createtime}</small>
        </div>
        <div class="post-image">
          <img src=${post.postimage} alt="">
        </div>
        <div class="post-title">
          <h3>${post.posttext}</h3>
        </div>
        <div class="post-actions">
          <button type="button" name="like" class="like-button">${post.likes}</button>
        </div>
      </div>`;
        $('.main-container').append(tableRow);
    }
