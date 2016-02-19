app.createViewToggle = function (label) {
    var control = document.createElement("div");
    control.setAttribute("class", "audio-ui-control");
    control.innerHTML =
            "<div class='audio-ui-toggle'>"
            + "<span class='audio-ui-label-on'>"+label.off+"</span> <i class='fa fa-lg fa-toggle-on'></i> <span class='audio-ui-label-off'>"+label.on+"</span>"
            + "</div>";

    return control;
};
/*
 <div class='audio-ui-control'>
 <div class='audio-ui-toggle'>
 <span class='audio-ui-label-on'></span><i class='fa fa-lg fa-toggle-on'></i><span class='audio-ui-label-off'></span>
 </div>
 </div> 
 
 */