var client = new BinaryClient('ws://binaryoggstreaming.example.com:8081');
var audio;
var currentPos = 0;

function updatePosition()
{
	if(audio.currentTime > currentPos)
	currentPos = audio.currentTime;
}

function restorePosition()
{
	if(currentPos > audio.currentTime)
	audio.currentTime = currentPos;
}

setInterval(updatePosition, 5);

client.on('stream', function(stream, meta)
{
	var parts = [];

	stream.on('data', function receiveData(data)
	{
		parts.push(data);
		console.log(parts.length);

		if(parts.length % 50 == 49)
		{
			(window.URL || window.webkitURL).revokeObjectURL(audio.src);

			audio.src = (window.URL || window.webkitURL).createObjectURL(new Blob(parts, {type: 'audio/ogg'}));
		}
	});

	stream.on('end', function streamEnd()
	{
		(window.URL || window.webkitURL).revokeObjectURL(audio.src);

		audio.src = (window.URL || window.webkitURL).createObjectURL(new Blob(parts, {type: 'audio/ogg'}));
	});
});

function initPage()
{
	audio = document.getElementById('myaudio');
	audio.ondurationchange = moreDataLoaded;
}

function moreDataLoaded()
{
	if(audio.paused)
	{
		setTimeout(restorePosition, 100);
	}
	else
	{
		restorePosition();
	}
}
