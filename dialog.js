document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        var height = document.getElementById('height').value;
        var appropriateWeight = new Function('height', 'return height ** 2 * 22;');
        window.alert('適正体重:' + appropriateWeight(height) + 'kg');
    });
});
