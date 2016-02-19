app.createGainNode = function () {
    var module, container, connection;
    module = app.createViewModule('gain');
    container = module.getElementsByClassName("audio-ui-container")[0];
    connection = module.getElementsByClassName("audio-ui-connection")[0];
    
    container.appendChild(app.createViewSlider({label : "Gain: ", unit : " dB"}));
    connection.appendChild(app.createViewRow(true, true));
    
    return module;
};


