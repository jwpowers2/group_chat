# group chat 

## nodejs socket.io

1. there is an JS array holding who is currently in the chat

2.  there is a var for 'logged in'

3. display log in form if user not logged in

4. login emits 'login' with name to server.js

5. server.js has a complete js object with all users in it (names and session hashes)

6. server.js appends new user to js object and broadcasts it out as 'current_users'

7. conversation board is a json array on server.js

8. client sends emit to server as 'add_comment'

9. server appends this to JSON Array as {"name":"myname","comment":"mycomment"}

10. server broadcasts this to all clients as 'current_comments'

