(function (app) {




    /*
     * app.Colection
     */
    (function (app) {
        var collection = new app.Collection();
        console.log("##########################");
        collection.add({"id": 0});
        if (collection.get(0) === undefined) {
            console.log("Collection.get => ", "fail");
        } else {
            console.log("Collection.get => ", "ok");
        }
    })(app);



    /*
     * app.Input
     */
    (function (app) {
        var input = new app.Input();
        console.log("##########################");
        if (input.type === "input") {
            console.log("new app.Input() => ", "ok");
        } else {
            console.log("new app.Input() => ", "fail");
        }

        try {
            input.node = {"type": "node"};
            console.log("app.Input.node => ", "ok");
        } catch (err) {
            console.log("app.Input.node => ", "fail");
        }
    })(app);

    /*
     * app.Output
     */
    (function (app) {
        var output = new app.Output();
        console.log("##########################");
        if (output.type === "output") {
            console.log("new app.Output() => ", "ok");
        } else {
            console.log("new app.Output() => ", "fail");
        }

        try {
            output.node = {"type": "node"};
            console.log("app.Output.node => ", "ok");
        } catch (err) {
            console.log("app.Output.node => ", "fail");
        }
    })(app);

    /*
     * factories
     */
    (function (app) {
        var node;

        try {
            node = app.createGain();
            if (node.type === 'gain') {
                console.log("app.createGain => ", "ok");
            } else {
                console.log("app.createGain => ", "fail");
            }
        } catch (err) {
            console.log("app.createGain => ", "fail");
        }
        
        try {
            node = app.createOscillator();
            if (node.type === 'oscillator') {
                console.log("app.createOscillator => ", "ok");
            } else {
                console.log("app.createOscillator => ", "fail");
            }
        } catch (err) {
            console.log("app.createOscillator => ", "fail");
        }  
        
        try {
            node = app.createDestination();
            if (node.type === 'destination') {
                console.log("app.createDestination => ", "ok");
            } else {
                console.log("app.createDestination => ", "fail");
            }
        } catch (err) {
            console.log("app.createDestination => ", "fail");
        }         
    })(app);


})(app);
