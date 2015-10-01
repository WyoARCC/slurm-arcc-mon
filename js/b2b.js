//function to draw a pi chart
function drawPi(){
	$.get('php/get_job.php', function(data, status){
		alert(data);
	});
}
drawPi();