app.service = {};
app.service.connect = function (origin, destination) {
    origin.node.connect(destination.node);
};
app.service.disconnect = function (node) {
    node.node.disconnect();
};



