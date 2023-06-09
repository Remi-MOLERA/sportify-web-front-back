|File                                 | Method | Routing                          | Middlewares                                  | FilePath                                       |
|-------------------------------------|--------|----------------------------------|----------------------------------------------|------------------------------------------------|
| src\core\web-server.js              |        |                                  |                                              |                                                |
|                                     | use    | /users                           | userRoutes.initializeRoutes()                | src\core\web-server.js#L37-L37                 |
|                                     | use    | /auth                            | authRoutes.initializeRoutes()                | src\core\web-server.js#L38-L38                 |
|                                     | use    | /home                            | homeRoutes.initializeRoutes()                | src\core\web-server.js#L39-L39                 |
|                                     | use    | /posts                           | postsRoutes.initializeRoutes()               | src\core\web-server.js#L40-L40                 |
|                                     | use    | /comments                        | commentsRoutes.initializeRoutes()            | src\core\web-server.js#L41-L41                 |
|                                     | use    | /notifications                   | notificationsRoutes.initializeRoutes()       | src\core\web-server.js#L42-L42                 |
|                                     | use    | /friendships                     | friendshipRoutes.initializeRoutes()          | src\core\web-server.js#L43-L43                 |
|                                     | use    | /seeder                          | seederRoute.initializeRoutes()               | src\core\web-server.js#L44-L44                 |
|                                     | use    | /report                          | reportRoute.initializeRoutes()               | src\core\web-server.js#L45-L45                 |
| src\controllers\auth.route.js       |        |                                  |                                              |                                                |
|                                     | post   | /login                           |                                              | src\controllers\auth.route.js#L10-L30          |
| src\controllers\comment.routes.js   |        |                                  |                                              |                                                |
|                                     | get    | /                                |                                              | src\controllers\comment.routes.js#L7-L9        |
|                                     | get    | /:id                             |                                              | src\controllers\comment.routes.js#L11-L13      |
|                                     | get    | /post/:id                        |                                              | src\controllers\comment.routes.js#L15-L17      |
|                                     | post   | /                                |                                              | src\controllers\comment.routes.js#L19-L31      |
|                                     | delete | /:id                             |                                              | src\controllers\comment.routes.js#L34-L43      |
| src\controllers\friendship.routes.js |        |                                  |                                              |                                                |
|                                     | get    | /                                |                                              | src\controllers\friendship.routes.js#L6-L8     |
|                                     | get    | /owner/:id                       |                                              | src\controllers\friendship.routes.js#L10-L12   |
|                                     | get    | /friend/:id                      |                                              | src\controllers\friendship.routes.js#L14-L16   |
|                                     | get    | /ownerandfriend/:idOwner/:idFriend |                                              | src\controllers\friendship.routes.js#L18-L20   |
|                                     | post   | /                                |                                              | src\controllers\friendship.routes.js#L22-L39   |
|                                     | delete | /:idUser                         |                                              | src\controllers\friendship.routes.js#L41-L44   |
| src\controllers\home.route.js       |        |                                  |                                              |                                                |
|                                     | get    | /                                |                                              | src\controllers\home.route.js#L6-L9            |
| src\controllers\notification.routes.js |        |                                  |                                              |                                                |
|                                     | get    | /                                |                                              | src\controllers\notification.routes.js#L7-L9   |
|                                     | get    | /:id                             |                                              | src\controllers\notification.routes.js#L11-L13 |
|                                     | get    | /post/:id                        |                                              | src\controllers\notification.routes.js#L15-L22 |
|                                     | post   | /                                |                                              | src\controllers\notification.routes.js#L24-L40 |
|                                     | delete | /:id                             |                                              | src\controllers\notification.routes.js#L43-L51 |
| src\controllers\post.routes.js      |        |                                  |                                              |                                                |
|                                     | get    | /                                |                                              | src\controllers\post.routes.js#L8-L10          |
|                                     | get    | /:id                             |                                              | src\controllers\post.routes.js#L12-L14         |
|                                     | get    | /user/:id                        |                                              | src\controllers\post.routes.js#L16-L18         |
|                                     | post   | /upload                          |                                              | src\controllers\post.routes.js#L20-L51         |
|                                     | delete | /:id                             |                                              | src\controllers\post.routes.js#L64-L73         |
|                                     | put    | /:id                             |                                              | src\controllers\post.routes.js#L53-L62         |
| src\controllers\report.routes.js    |        |                                  |                                              |                                                |
|                                     | get    | /                                |                                              | src\controllers\report.routes.js#L9-L11        |
|                                     | post   | /                                |                                              | src\controllers\report.routes.js#L12-L26       |
|                                     | delete | /:id                             |                                              | src\controllers\report.routes.js#L28-L36       |
| src\controllers\seeder.routes.js    |        |                                  |                                              |                                                |
|                                     | get    | /user                            |                                              | src\controllers\seeder.routes.js#L10-L23       |
|                                     | get    | /post                            |                                              | src\controllers\seeder.routes.js#L24-L36       |
|                                     | get    | /comment                         |                                              | src\controllers\seeder.routes.js#L37-L49       |
|                                     | get    | /friendship                      |                                              | src\controllers\seeder.routes.js#L50-L61       |
|                                     | get    | /notification                    |                                              | src\controllers\seeder.routes.js#L62-L74       |
| src\controllers\user.routes.js      |        |                                  |                                              |                                                |
|                                     | get    | /                                |                                              | src\controllers\user.routes.js#L8-L10          |
|                                     | get    | /:id                             |                                              | src\controllers\user.routes.js#L12-L21         |
|                                     | post   | /create/login                    |                                              | src\controllers\user.routes.js#L23-L38         |
|                                     | delete | /:idUser                         |                                              | src\controllers\user.routes.js#L68-L71         |
|                                     | put    | /login/:id                       |                                              | src\controllers\user.routes.js#L40-L57         |
|                                     | put    | /:id                             |                                              | src\controllers\user.routes.js#L59-L66         |
