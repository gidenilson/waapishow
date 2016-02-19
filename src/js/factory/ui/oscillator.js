app.createOscillatorNode = function () {
    var module, container, connection;
    module = app.createViewModule('oscillator');
    container = module.getElementsByClassName("audio-ui-container")[0];
    connection = module.getElementsByClassName("audio-ui-connection")[0];
    
    container.appendChild(app.createViewSlider({label: "Freq: ", unit : " Hz"}));
    container.appendChild(app.createViewToggle({on: "ON", off : "OFF"}));
    connection.appendChild(app.createViewRow(false, true));
    
    return module;
};


