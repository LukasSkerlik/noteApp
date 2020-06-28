### `Make notes, To-dos and more. `

This is simply a note taking app that I developed for my own practice and for inclusion in my portfolio.

Live version can be accessed here: https://thedefinitivereactnoteapp.herokuapp.com/

Worth noting: as the site is hosted on heroku on a free server (one based in America) and not anywhere else simultaneously, the loading time might be harsh. This is not a fault of the code, but of the servers.

### `Important! css bugs with heroku`

For currently to me unknown reasons, this site gets rendered differently on heroku than my local environment. In particular, there is no bottom scroll bar, as the width of the body is 100% and footer with copyright doesn't overlap with notes when there is enough of them to fill the page. WORK is still IN PROGRESS on this bug.

### `Project not in active development`

It is only front-end, therefore there is no data persistency via a server. For future, if I will decide to implement that, it would be most likely using next.js.

If you are looking for something similar with use of a server using node express and ejs templating, see my other project: https://github.com/LukasSkerlik/blogWebsite

### `Credits`

Initial html and css provided by initial files from the fullstack course by Angela Yu on udemy. Everything else, including functionality (though checked for the more initial functionality with files from Angela Yu, not with some of the added features) via JS and css changes using mostly sass by Lukas Skerlik.
