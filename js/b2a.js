//function to draw a table about running and pending processing
function runningPending(){
	$.get('php/get_job.php', function(data, status){
		//get data
		var dataResult = JSON.parse(data);
		var totalJobs = dataResult.total_jobs;
		var totalNode = dataResult.total_node;
		var totalCore = dataResult.total_core;
		var runPenOutput = '';

		//format output
		runPenOutput += '<h1>Running and Pending Status</h1>';
		runPenOutput += '<table class="table table-bordered">';
		runPenOutput +=		'<thead>';
		runPenOutput +=			'<tr>';
		runPenOutput +=				'<th>Components</th>';
		runPenOutput +=				'<th>Running</th>';
		runPenOutput +=				'<th>Pending</th>';
		runPenOutput +=			'</tr>';
		runPenOutput +=		'</thead>';
		runPenOutput +=		'<tbody>';
		runPenOutput +=			'<tr>';
		runPenOutput +=				'<td>Jobs</td>';
		runPenOutput +=				'<td>'+totalJobs.running+'</td>';
		runPenOutput +=				'<td>'+totalJobs.pending+'</td>';
		runPenOutput +=			'</tr>';
		runPenOutput +=			'<tr>';
		runPenOutput +=				'<td>Cores</td>';
		runPenOutput +=				'<td>'+totalCore.running+'</td>';
		runPenOutput +=				'<td>'+totalCore.pending+'</td>';
		runPenOutput +=			'</tr>';
		runPenOutput +=			'<tr>';
		runPenOutput +=				'<td>Nodes</td>';
		runPenOutput +=				'<td>'+totalNode.running+'</td>';
		runPenOutput +=				'<td>'+totalCore.pending+'</td>';
		runPenOutput +=			'</tr>';
		runPenOutput +=			'<tr>';
		runPenOutput +=				'<td>GPUs</td>';
		runPenOutput +=				'<td>0</td>';
		runPenOutput +=				'<td>0</td>';
		runPenOutput +=			'</tr>';
		runPenOutput +=			'<tr>';
		runPenOutput +=				'<td>PHIS</td>';
		runPenOutput +=				'<td>0</td>';
		runPenOutput +=				'<td>0</td>';
		runPenOutput +=			'</tr>';
		runPenOutput +=			'<tr>';
		runPenOutput +=				'<td>CPU-Time</td>';
		runPenOutput +=				'<td>0</td>';
		runPenOutput +=				'<td>0</td>';
		runPenOutput +=			'</tr>';
		runPenOutput +=		'</tbody>';
		runPenOutput += '</table>';

		//append the output
		$("#box2a").html('');
		$("#box2a").html(runPenOutput);
	});
}

//call runningPending function
runningPending();
var intervalb2a = setInterval(function(){runPenOutput()},20);