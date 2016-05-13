function assert(value, desc) {
//            增加标签Li
    var li = document.createElement('li');
    li.className = value ? "pass" : 'fail';
    li.appendChild(document.createTextNode(desc));
    document.getElementById('results').appendChild(li);
}