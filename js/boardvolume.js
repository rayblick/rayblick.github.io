// USED TO EVALUATE WIDTH AND THICKNESS MEASUREMENTS
// e.g. form dom_object = document.getElementById("frm1");
// e.g. string_id = thick ---><input id="thick" type="text"/>
function parse_strings(y){
    // if the dom object looks like 6 1/2
    if(y.length > 1){
        var z = y[1].split('/');
        var v = (parseInt(y[0]) + (parseInt(z[0]) / parseInt(z[1])));
        return v
    }
    else{
        var z = y[0].split('/');
        // parsed dom_object is a fraction like 1/2
        if(z.length > 1){
            var v = (parseInt(z[0]) / parseInt(z[1]));
            return v
        }
        // parsed dom object is just an integer like 6
        else{
            var v = (parseInt(y[0]));
            return v
        }
    }
}

// PARSE LENGTH MEASUREMENTS
function parse_length(y){
    if(y.length > 1){
        var v = (parseInt(y[0]) + (parseInt(y[1]) / 12));
        return v
    }
    else{
        var v = (parseInt(y[0]));
        return v
    }
}
var myArray = []

function myFunction() {
    // get the dom form object
    var x = document.getElementById("frm1");

    // Extract the values for each measurement
    // Also split each string on white space
    var l = x.len.value.split(" ");
    var w = x.wid.value.split(" ");
    var t = x.thick.value.split(" ");

    // parse the form input boxes
    var len = parse_length(l)
    var wid = parse_strings(w)
    var thick = parse_strings(t)

    // check if length width and thickness fall inside
    // appropriate dimensions

    if(x.boards.value == "AR"){
        var boardtype = 0.0
        $('img#surfboardImage').attr("src","../img/allrounder.png")
    }
    else if (x.boards.value == "HP") {
        var boardtype = -2.155433
        $('img#surfboardImage').attr("src","../img/Highperformance.png")
    }
    else if (x.boards.value == "FHP") {
        var boardtype = -1.275470
        $('img#surfboardImage').attr("src","../img/Friendly high performance.png")
    }
    else if (x.boards.value == "SW") {
        var boardtype = -0.675191
        $('img#surfboardImage').attr("src","../img/Smallwave.png")
    }
    else if (x.boards.value == "FI") {
        var boardtype = 1.014127
        $('img#surfboardImage').attr("src","../img/grovelfish.png")
    }
    // calculate volume
    var volume = -75.197048 + boardtype + 6.390996 * len
                + 2.605445 * wid
                + 7.154882 * thick

    var volume = volume.toFixed(3)

    // return the volume to the html tag "demo"
    if(x.len.value != "" && x.wid.value != "" && x.thick.value != ""){
        document.getElementById("demo").innerHTML = volume + ' litres';

        // save each search to an array (gets wiped on page reload)
        myArray.push(x.boards.value + '; length: ' + x.len.value + '; width: ' +
                    x.wid.value + '; thickness: ' + x.thick.value + ' = ' + volume)
        myArrayLength = myArray.length - 1

        // on the second request show the last calculation
        if(myArrayLength >= 1){
            document.getElementById("last_calc").innerHTML = "Your last calculation: "
            document.getElementById("myLastCalculation").innerHTML = myArray[myArrayLength-1]
        }
    }
    else{
        document.getElementById("demo").innerHTML = "";
    }
}
