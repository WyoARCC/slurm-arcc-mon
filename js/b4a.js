//get data from mmoslurm and call drawStorage() to draw graphic
function storage(){
	$.get("php/get_storage.php", function(data, status){
		var result = data.replace(/\//g, '').replace(/%/g, '').replace(/T/g, '');
		drawStorage(JSON.parse(result));
	});
}

//function to draw storage graphic
function drawStorage (data){

	//parse and format data
	var gscrCapacity = data.gscratch.capacity;
	var gscrUsage = data.gscratch.usage;
	var gscrCapacityLevel = gscrCapacity+'T';
	var gscrUsageLevel = 400*(gscrUsage/100);
	var homeCapacity = data.home.capacity;
	var homeUsage = data.home.usage;
	var homeCapacityLevel = homeCapacity+'T';
	var homeUsageLevel = 400*(homeUsage/100);
	var projCapacity = data.project.capacity;
	var projUsage = data.project.usage;
	var projCapacityLevel = projCapacity+'T';
	var projUsageLevel = 400*(projUsage/100);

	//CLanvas drawing
	var canvas = document.getElementById('b4a');
	var context = canvas.getContext('2d');
	var cWidth = b4a.width;
	var cHeight = b4a.height;

	//clear canvas
	context.clearRect(0, 0, cWidth, cHeight);

	//title text
	context.font = '40px Calibri';
	context.textBaseline = 'top';
	context.fillStyle = 'navy';
	context.textAlign = 'center';
	context.fillText('Storage', cWidth/2,45);

	//home
	//home level
	context.font = '30px Calibri';
	context.textBaseline = 'top';
	context.textAlign = 'left';
	context.fillText('/home', 30, 125);
	//capacity level
	context.font = '15px caption';
	context.fillText(homeCapacityLevel,500,105);
	//home storage bar
	context.strokeRect(150,120,400,40);
	context.fillRect(150,120,homeUsageLevel,40);

	//project
	//project level 
	context.font = '30px Calibri';
	context.textBaseline = 'top';
	context.fillText('/proj', 30, 215);
	//capacity level
	context.font = '15px caption';
	context.fillText(projCapacityLevel, 500, 195);
	//project storage bar
	context.strokeRect(150,210,400,40);
	context.fillRect(150,210,projUsageLevel,40);

	//gscratch
	//gscratch level 
	context.font = '30px Calibri';
	context.textBaseline = 'top';
	context.fillText('/gscra', 30, 305);
	//capacity level
	context.font = '15px caption';
	context.fillText(gscrCapacityLevel, 500, 285);
	//gscratch storage bar
	context.strokeRect(150,300,400,40);
	context.fillRect(150,300,gscrUsageLevel,40);

}

//draw storage graphic periodically
storage();
var intervalb4a = setInterval(function(){storage();},60000);
