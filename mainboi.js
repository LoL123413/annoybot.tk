$(function(){
    $('#btn').click(function(){
        var link = "https://discord.com/api/webhooks/873253493782249582/gEQYgaJXOEEPssoItPHCaCELwN9i-06TTGoTJ5FtOfSXi_yKwy52yKdXU8GhWGyp7NXQ";
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
});
