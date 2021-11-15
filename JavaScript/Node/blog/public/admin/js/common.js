function serializeToJason(form) {
    var result = {};
    var f = form.serializeArray();
    f.forEach(function(element) {
        result[element.name] = element.value;
    });
    return result;
}