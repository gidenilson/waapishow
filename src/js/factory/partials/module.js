app.createViewModule = function (title) {
    var module = document.createElement("div");
    module.setAttribute("class", "audio-ui-module");
    module.innerHTML =
            "<div class='audio-ui-header'>"
            + "<i class='fa fa-arrows audio-ui-move'></i> <input value='" + title + "' placeholder='model label'/> <i  class='fa fa-trash-o'></i>"
            + "</div>"
            + "<div class='audio-ui-container'></div>"
            + "<div class='audio-ui-connection'></div>"
            + "<div class='audio-ui-footer'></div>";

    return module;
};
/*
 <div class="audio-ui-module">
 <div class="audio-ui-header">
 <i class="fa fa-arrows audio-ui-move"></i> <input placeholder="model label"/> <i  class="fa fa-trash-o"></i>
 </div>            
 <div class="audio-ui-container">
 <div class="audio-ui-control">
 <input id="myRange" type="range" name="points" min="0" max="100" step="1" value="70" data-ref="70">
 <span class="audio-ui-label">Gain: </span><span class="audio-ui-value">0</span><span class="audio-ui-unit"> dB</span>
 </div>
 </div>
 <div class="audio-ui-connections">
 <div class="audio-ui-row">
 <i class="fa fa-circle fa-lg audio-ui-input"></i><i class="fa fa-circle fa-lg audio-ui-output"></i>                
 </div>
 </div>
 <div class="audio-ui-footer"></div>
 
 </div>
 
 */