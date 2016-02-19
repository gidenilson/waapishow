app.createGain = function () {
    return {"type": "gain",
        "id": app.idGenerate(),
        "node": app.audioCtx.createGain()}
};

app.createOscillator = function () {
    return {"type": "oscillator",
        "id": app.idGenerate(),
        "node": app.audioCtx.createOscillator()}
};
app.createDestination = function () {
    return {"type": "destination",
        "id": app.idGenerate(),
        "node": app.audioCtx.destination
    }
};