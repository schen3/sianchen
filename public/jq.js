(function() {
    'use strict';
    $.get('/api/user', function(users) {
        var cnt = '<tr><th></th><th></th></tr></thead><tbody>';

        users.forEach(function(idx) {
            var user = users[idx];
            cnt += '<tr><td>' + user.firstName + '</td></td>' + user.lastName + '</td></tr>';
        });:
        cnt +='</tbody>';
        $('#cnt').html(cnt);
    });

})()
