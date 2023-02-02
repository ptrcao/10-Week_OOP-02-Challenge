
// generateCards 
function uniqueInfo(employee){
    
    switch(employee.getRole().toLowerCase()){
        case 'manager':
            return `<p class="card-text">Office number: ${employee.getOffice()}</p>`
        case 'intern':
            return `<p class="card-text">School: ${employee.getSchool()}</p>`
        case 'engineer':
            return `<p class="card-text">GitHub account: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></p>`
    }
    }


function injectHtml2Template(allEmployees) {

var cards = allEmployees.map(employee => {

var cardContent = `
<div class="card">
<img class="card-img-top" src="/Assets/clipart190034.png" width="50" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Role: ${employee.getRole()}</h5>
  <p class="card-text">ID: ${employee.getId()}</p>
  <p class="card-text">Name: ${employee.getName()}</p>
  <p class="card-text">
  Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
  </p>
  ${uniqueInfo(employee)}
</div>
</div>
`
return cardContent;

})


    // console.log(cards)
var dynamicHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title></title>
  <link href="style.css" rel="stylesheet" />

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font size responsiveness: https://stackoverflow.com/a/30459783/9095603 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  

</head>
<body>

  <!-- https://www.net-developer.nl/en/bootstrap-grid-generator.html -->
  <div class="container">
	<div class="row">
		<div class="col">
            <h1>My Team</h1>
        </div>
	</div>
	<div class="row">

            <div class="card-group">
                ${cards.map(element => {return element}).join("")}
            </div>

    </div>


	<div class="row">
		<div class="col"></div>
	</div>
</div>

  <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  <script>
  </script>
</body>
</html>`

// console.log(dynamicHtml)
return dynamicHtml;

}

export {injectHtml2Template, uniqueInfo};
