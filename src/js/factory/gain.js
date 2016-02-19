app.createGainNode = function () {
    var module, container, connection;
    module = app.createViewModule('meu modulo');
    container = module.getElementsByClassName("audio-ui-container")[0];
    connection = module.getElementsByClassName("audio-ui-connection")[0];
    
    container.appendChild(app.createViewControl());
    connection.appendChild(app.createViewRow());
    
    return module;
};


