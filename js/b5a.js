//function to draw a table about nodes stat.
function nodesStat(){
	$.get('php/get_node.php', function(data, status){
		data = data.replace(/-/g, '_');
		var result = JSON.parse(data);
		var nodeTotal = result.total;
		result = result.nodes;
		var output = '';
		output += '<h1>Nodes Sttatistics</h1>';
		output += '<table class="table table-bordered">';
		output +=	'<thead>';
		output +=		'<tr>';
		output +=			'<th>NODE TYPE</th>';
		output +=			'<th>COUNT</th>';
		output +=			'<th>CCORES</th>';
		output +=			'<th>MEM</th>';
		output +=			'<th>GPU</th>';
		output +=			'<th>PHIS</th>';
		output +=		'</tr>';
		output +=	'</thead>';
		output += 	'<tbody';
		output += 		'<tr>';
		output += 			'<td>THIN</td>';
		output +=			'<td>'+result.thin.nodes+'</td>';
		output +=			'<td>'+result.thin.cores+'</td>';
		output +=			'<td>'+result.thin.mem+'</td>';
		output +=			'<td>'+result.thin.gpus+'</td>';
		output +=			'<td>'+result.thin.phis+'</td>';
		output += 		'</tr>';
		output +=		'<tr>';
		output +=			'<td>THIN-GPU</td>';
		output +=			'<td>'+result.thin_gpu.nodes+'</td>';
		output +=			'<td>'+result.thin_gpu.cores+'</td>';
		output +=			'<td>'+result.thin_gpu.mem+'</td>';
		output +=			'<td>'+result.thin_gpu.gpus+'</td>';
		output +=			'<td>'+result.thin_gpu.phis+'</td>';
		output +=		'</tr>';
		output +=		'<tr>'
		output +=			'<td>FAT</td>';
		output +=			'<td>'+result.fat.nodes+'</td>';
		output +=			'<td>'+result.fat.cores+'</td>';
		output +=			'<td>'+result.fat.mem+'</td>';
		output +=			'<td>'+result.fat.gpus+'</td>';
		output +=			'<td>'+result.fat.phis+'</td>';
		output +=		'</tr>';
		output +=		'<tr>';
		output +=			'<td>FAT-GPU</td>';
		output +=			'<td>'+result.fat_gpu.nodes+'</td>';
		output +=			'<td>'+result.fat_gpu.cores+'</td>';
		output +=			'<td>'+result.fat_gpu.mem+'</td>';
		output +=			'<td>'+result.fat_gpu.gpus+'</td>';
		output +=			'<td>'+result.fat_gpu.phis+'</td>';
		output +=		'</tr>';
		output +=		'<tr>';
		output +=			'<th>Total</th>';
		output +=			'<th>'+nodeTotal.nodes+'</th>';
		output +=			'<th>'+nodeTotal.cores+'</th>';
		output +=			'<th>'+nodeTotal.mem+'</th>';
		output +=			'<th>'+nodeTotal.gpus+'</th>';
		output +=			'<th>'+nodeTotal.phis+'</th>';
		output +=		'</tr>';
		output += 	'</tbody';
		output += '</table>';
		$("#box5").html('');
		$("#box5").html(output);
	});
}

//call nodesStat() periodically to draw table
nodesStat();
var intervalb5a = setInterval(function(){nodesStat();},60000);