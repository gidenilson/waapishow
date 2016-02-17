var app = {
    "name": "Web Audio API Show",
    "version": "0.0.1",
    "audioCtx": new (window.AudioContext || window.webkitAudioContext),
    "audioNodeCollection": [],
    "inCollection": [],
    "outCollection": [],
    "uiControllerCollection": [],
    "services": [],
    "nextId": -1
};
app.idGenerate = function () {
    return app.nextId += 1;
};

