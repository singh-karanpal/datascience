// call section
const objects = document.getElementById('objects')
const STATUS = document.getElementById('status');
const SUBSTATUS = document.getElementById('sub_status');
const loading = document.getElementById("loading");


// load model
var model = undefined;

cocoSsd.load().then(function (loadedModel) {
    model = loadedModel;
    console.log('model loaded..Done');
    // once loaded, make body visible
    objects.classList.remove('invisible')
    loading.remove()
});


// get the element by id
const image = document.getElementsByClassName('classifyOnClick')

for (i = 0; i < image.length; i++) {
    console.log('i :' + image[i].children[0].addEventListener('click', predictObjects))
}



function predictObjects(event) {
    if (!model) {
        return;
    }

    console.log('Things are fine, model loaded, click works')


    // predict
    model.detect(event.target).then(function (predictions) {
        console.log('Objects Detected: ' + predictions.length)

        document.getElementById("status").value = 'Objects Detected: ' + predictions.length;

        // for every object
        for (let obj = 0; obj < predictions.length; obj++) {
            //create a p element
            const p = document.createElement('p');

            // style p and put data into p
            p.innerText = predictions[obj].class + ' -- '
                + Math.round(parseFloat(predictions[obj].score) * 100) + '% Confidence '


            // textbox details
            const textBox = document.createElement('input');
            textBox.type = 'text';
            textBox.id = 'MytxBox' + obj; // use obj instead of i
            textBox.name = '';
            textBox.value = p.innerText;
            // set the width to 'auto' for flexible width
            textBox.style.width = 'auto';
            document.getElementById('sub_status').appendChild(textBox);
            document.getElementById('sub_status').appendChild(document.createElement('br'));

            // place the p label on top of objects
            p.style = 'left: ' + predictions[obj].bbox[0] + 'px;'
                + 'top: ' + predictions[obj].bbox[1] + 'px;'
                + 'width: ' + (predictions[obj].bbox[2] - 10) + 'px;';

            // highlighting the objects with color
            const highlighter = document.createElement('div');
            highlighter.setAttribute('class', 'highlighter');
            highlighter.style = 'left: ' + predictions[obj].bbox[0] + 'px;' +
                'top: ' + predictions[obj].bbox[1] + 'px;' +
                'width: ' + predictions[obj].bbox[2] + 'px;' +
                'height: ' + predictions[obj].bbox[3] + 'px;';

            event.target.parentNode.appendChild(highlighter);
            event.target.parentNode.appendChild(p);

        }
    })
}