//Function to build table
function makeTable(articles){
		
	//console.log(articles);//check if get articles
	
	$('#tableArticles').html(" ");
	
	
	articles.data.forEach((article) => {
		
			$('#tableArticles').append(
			`<tr>
					<td>${article.id}</td>
					<td>${article.date}</td>
					<td>${article.author}</td>
					<td>${article.tags}</td>
					<td>${article.linkCap}</td>
					<td>${article.title}</td>
					<td>${article.contenu}</td>
				</tr>
			`
			)
	})
}


(function() {
  // Create HttpRequest
  let req = new XMLHttpRequest();

  let url = "/json/articles.json";

  req.open('GET', url, true);

	req.onreadystatechange = function(event) {
		if (req.readyState === 4){
			if (req.status === 200){ 
			
				let articlesJSON = JSON.parse(req.responseText);
				let articles = new Articles(articlesJSON);
		 
				let that = articles.data;
				
				
				//Build table initial
				makeTable(articles);
				
				//set initial order of Table
				let statusTable= 0;
				
				//set function to call fillter of search and rebuild table
				let filterOn = function(){
					articles.filterArticles(filter.value);
					makeTable(articles);
				}
				
				// set var for the input
				let filter = document.querySelector("#searchArticle");
				let bGO = document.querySelector("#bSearch");
				bGO.addEventListener("click", filterOn, false);
				
				// add event listener for the parent of buttons
				let displayOpts = document.querySelector("#options");
				displayOpts.addEventListener("click", sort, false);
				
				
				
				//function to sort by ID and Date as item is clicked
				function sort(e){
					//check if its a child clicked
					if(e.target != e.currentTarget){
						//gets ID of the item clicked
						let clickedItem = e.target.id;
						//check status of the table to define direction
						if (statusTable === 0 || statusTable === 1){
							//reorder the table
							that.sort(function (a, b){
								//change status of the table if ID
								if (clickedItem === "id"){
									return a[clickedItem] - b[clickedItem];
								//If DATE
								}else{
									a = a[clickedItem];
									b = b[clickedItem];
									return a - b;
								}
							});	
							// change status of table
							statusTable = 2;
						//Sort reverse
						}else{
							that.sort(function (a, b){
								if (clickedItem === "id"){
									//console.log("ID works")// Check if click ID works
									return b[clickedItem] - a[clickedItem];
								//Reverse DATE
								}else{
									a = a[clickedItem];
									b = b[clickedItem];
									return b - a;
								}
							});
							// change status of table
							statusTable = 1;
						}
					}
					//console.log("Status of table is: " + statusTable);//Check status of table after click
					//Clean table
					$('#tableArticles').html(" ");
					//rebuild table
					makeTable(articles);
					e.stopPropagation();
				}
					
			} else {
				alert(`Status: ${req.status} - Could not load this article`);
			}
		} else {
		  console.log("Loading");
		}
	}

  req.send();
})();


(function() {
  // Create HttpRequest
  let req = new XMLHttpRequest();

  let url = "/json/articles.json";

  req.open('GET', url, true);

	req.onreadystatechange = function(event) {
		if (req.readyState === 4){
			if (req.status === 200){ 
			
				let articlesJSON = JSON.parse(req.responseText);
				let articles = new Articles(articlesJSON);
		 
				let that = articles.data;
				
				//console.log(articles); //Check array with all content
				
				
					
			} else {
				alert(`Status: ${req.status} - Could not load this article`);
			}
		} else {
		  console.log("Loading");
		}
	}

  req.send();
})();