
module.exports = (vitreum)=>{
	return `<html>
    <head>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css" />

        ${vitreum.head}
    </head>
    <body>
        <main id="reactRoot">${vitreum.body}</main>
    </body>
    ${vitreum.js}
</html>`;
};