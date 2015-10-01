//get data from mmoslurm and draw graphics bu calling drawUsage()
function usage(){
	$.get('php/get_node.php', function(data, status){
		var nodeData = JSON.parse(data);
		var clusterUsed = nodeData.cluster;
		var clusterTotal = nodeData.total;
		var clusterUsedTotal = {used:clusterUsed,total:clusterTotal};
		drawUsage(clusterUsedTotal);
	});
}

function drawUsage(data){

	//abstract data
	var usedNodes = data.used.alloc_nodes;
	var usedCores = data.used.alloc_cores;
	var totalNodes = data.total.nodes;
	var totalCores = data.total.cores;
	var usedNodesPerc = (usedNodes/totalNodes)*100;
	var usedNodesMsg = usedNodes+' of '+totalNodes;
	var usedNodesPercMsg = ((usedNodes/totalNodes)*100).toFixed(2)+'% nodes are using.'
	var usedCoresPerc = (usedCores/totalCores)*100;
	var usedCoresMsg = usedCores+' of '+totalCores;
	var usedCoresPercMsg = ((usedCores/totalCores)*100).toFixed(2)+'% cores are using.'
	var usedNodesLevel = 330*(usedNodesPerc/100);
	var usedCoresLevel = 330*(usedCoresPerc/100);

	//canvas drawing
	var canvas = document.getElementById('b1a');
	var context = canvas.getContext('2d');
	var cWidth = b1a.width;
	var cHeight = b1a.height;

	//clear canvas
	context.clearRect(0, 0, cWidth, cHeight);

	//draw heading (usage)
	context.font = '40px calibri';
	context.textBaseline = 'top';
	context.fillStyle = '#006666';
	context.textAlign = 'center';
	context.fillText('Usage', cWidth/2, 10);

	//level text cores
	context.font = '20px calibri';
	context.textAlign = 'left';
	context.fillText('Cores', 40, 60);
	//level text usedCores/totalCores
	context.font = '10px calibri';
	context.fillText(usedCoresMsg, 40, 425);
	//cores bars
	context.strokeRect(40, 90, 60, 330);
	context.fillRect(40, 420-usedCoresLevel, 60, usedCoresLevel);

	//level text nodes
	context.font = '20px calibri';
	context.fillText('Nodes', 150, 60);
	//level text usedNode/totalCores
	context.font = '10px calibri';
	context.fillText(usedNodesMsg, 150, 425);
	//node bars
	context.strokeRect(150, 90, 60, 330);
	context.fillRect(150, 420-usedNodesLevel, 60, usedNodesLevel);

	//core infor message
	context.save();
	context.font = '20px calibri';
	context.translate(15, 365);
	context.rotate(((Math.PI)/180)*(-90));
	context.fillText(usedCoresPercMsg, 0, 0);
	context.restore();

	//node infor message
	context.save();
	context.font = '20px calibri';
	context.translate(125, 365);
	context.rotate(((Math.PI)/180)*(-90));
	context.fillText(usedNodesPercMsg, 0, 0);
	context.restore();
}

//periodically draw graphics
usage();
var intervalb1a = setInterval(function(){usage();}, 20000);