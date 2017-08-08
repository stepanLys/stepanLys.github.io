window.onload = function () {
	// console.log(	LIST[0]['city'] + ', населення ' + (LIST[0]['population']/1000000).toFixed(1) + ' млн.');	

	function createList(){
		var dropList = document.getElementById('listlist');
		for (var i = 0; i < LIST.length; i++) {
			var dropListElement = document.createElement('li'),
					population = LIST[i]['population'];
			
			if (population > Math.pow(10, 6)) {
				dropListElement.innerHTML = LIST[i]['city'] + ', населення  '
																	+ (population/1000000).toFixed(1) + ' млн.';
			dropList.appendChild(dropListElement);
			}
		}
	}

	createList();

	function activeCity(){
		var nodes = document.querySelectorAll("div ul li");
		var label = document.getElementById('labelText');
		[].forEach.call(nodes, function(a) {
			a.addEventListener("click", function(event) {
				event.preventDefault();
				[].forEach.call(nodes, function(b) {
					b.classList[["add", "remove"][+(a != b)]]("active")
					for(var i = 0; i < nodes.length; i++){
						if (nodes[i].className === 'active') {label.innerText = nodes[i].innerText;}
					}
				})
			})
		})
	}

	activeCity();

	var arr = new Array();
	for(var i = 0; i < LIST.length; i++){
		arr.push(LIST[i]['city'] + ', населення  '
				+ (LIST[i]['population']/1000000).toFixed(1) + ' млн.');
	}
	console.log(arr);

	document.getElementById('search').onkeyup = function(){
		document.getElementById('listlist').innerHTML = '';
		var l = this.value.length;
		console.log(l);
		if(l>0){
			for(var i=0;i<arr.length;i++){
				var city = arr[i].split('').slice(0,l).join('').toLowerCase();
				if(city ==this.value.toLowerCase()){
					document.getElementById('listlist').innerHTML+='<li>' + arr[i] + '<br/></li>';
					activeCity();
				}
			}
		} else { createList(); activeCity(); }
	};

}