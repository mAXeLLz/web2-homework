let idx = 0
let posts = []
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

function loadPostInfo() {
    return $.get(
        {
            url: '././res/data/post.json',
            success: function (response) {
                console.log('Got post info')
                return response;
            },
            error: function() {
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