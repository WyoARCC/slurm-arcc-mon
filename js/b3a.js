//function to draw a table about top users
function topUsers(){
	//get data and process the data
	$.get('php/get_job.php', function(data, status){
		
		//declear some variable
		var i,j;
		var topUsersTable = '';
		var users_sum = JSON.parse(data).sum_user; //get user_sum object
		
		//process user_sum string to convert in array
		users_sum = JSON.stringify(users_sum).replace(/{/, '').replace(/}}/, '}').replace(/},/g, '}},').replace(/".[0-9]*":{/g, '{');
		
		//convert processed user_sum string to array of objects
		users_sum = users_sum.split("},");
		
		//convert indivisual string inside a arrray to object
		for(i = 0; i < users_sum.length; i++){
			users_sum[i] = JSON.parse(users_sum[i]);
		}
		
		//sort array
		for (i = users_sum.length-1; i > 1; i--){
			for(j = 0; j < i-1; j++){
				if((users_sum[j].running_cores) < (users_sum[j+1].running_cores)){
					var first = users_sum[j];
					users_sum[j] = users_sum[j+1];
					users_sum[j+1] = first;
				}
			}
		}
		
		//format and display result
		topUsersTable += '<h1>Top Users</h2>'
		topUsersTable += '<table class="table table-bordered">';
		topUsersTable += 	'<thead>';
		topUsersTable +=		'<tr>';
		topUsersTable +=			'<th>NAME</th>';
		topUsersTable +=			'<th>CORES</th>';
		topUsersTable +=			'<th>GPUS</th>';
		topUsersTable +=		'</tr>';
		topUsersTable +=	'</thead>';
		topUsersTable += 	'<tbody>';
		for (i = 0; i < 7; i++){
			topUsersTable += '<tr>';
			topUsersTable +=	'<td>'+users_sum[i].formname+'</td>';
			topUsersTable +=	'<td>'+users_sum[i].running_cores+'</td>';
			topUsersTable +=	'<td>'+users_sum[i].running_gpus+'</td>';
			topUsersTable += '</tr>';
		}
		topUsersTable += 	'</tbody>';
		topUsersTable += '</table>';

		//output the result
		$("#box3").html('');
		$("#box3").html(topUsersTable);

	});
}

//draw table periodically;
topUsers();
var Intervalb3a = setInterval(function(){topUsers();},20000);