var x = document.getElementById("name");

//console.log(x.value);

$('#bashBtn').click(function(event)
{
    $("#bashBtn").addClass('active');
    $("#gulBtn").removeClass('active');
    $("#mirBtn").removeClass('active');

    $('#bashundhara').show();
    $('#gulshan').hide();
    $('#mirpur').hide();
    $('#presc').show();
    
});

$('#gulBtn').click(function(event)
{
    $("#gulBtn").addClass('active');
    $("#bashBtn").removeClass('active');
    $("#mirBtn").removeClass('active');

    $('#bashundhara').hide();
    $('#gulshan').show();
    $('#mirpur').hide();
    $('#presc').show();
});

$('#mirBtn').click(function(event)
{
    $("#mirBtn").addClass('active');
    $("#gulBtn").removeClass('active');
    $("#bashBtn").removeClass('active');

    $('#bashundhara').hide();
    $('#gulshan').hide();
    $('#mirpur').show();
    $('#presc').show();
});

$('#submit').click(function(event)
{
    $('.inputUser').hide();
    $('#issue').show();
    
    //document.getElementById('output').value = x.value;
    
});

$('#confirmBtn').click(function(event)
{
    $('#issue').hide();
    $('#loc').show();

    $('#backBtn').click(function(event){
        $('#issue').show();
        $('#loc').hide();

        $("#stomBtn").removeClass('active');

        $("#bashBtn").removeClass('active');
        $("#gulBtn").removeClass('active');
        $("#mirBtn").removeClass('active');

    
        $('#bashundhara').hide();
        $('#gulshan').hide();
        $('#mirpur').hide();
        $('#presc').hide();
    });
});


function issue(event){
    
    if(event.target.innerText == "HEADACHE"){
        
        $("#headBtn").addClass('active');
        $("#stomBtn").removeClass('active');        
        $("#diaBtn").removeClass('active');
        //var issueOut = $('output').append('Head Ache')
        $('#prescBtn').click(function(event)
        {
            $('#cap').append('Patient Name: ' + x.value + '<p>Problem: Head Ache</p>');
            $('#headTable').show();
            $('#gasTable').hide();
            $('#diaTable').hide();
            $('#presc').hide();
            $('#loc').hide();
        });

        $('#backBtn').click(function(event){
            $('#issue').show();
            $('#loc').hide();
        
            $("#headBtn").removeClass('active');

            $("#bashBtn").removeClass('active');
            $("#gulBtn").removeClass('active');
            $("#mirBtn").removeClass('active');

            $('#bashundhara').hide();
            $('#gulshan').hide();
            $('#mirpur').hide();
            $('#presc').hide();
        });
    }
    else if(event.target.innerText == "GASTRIC"){
        
        $("#stomBtn").addClass('active');
        $("#headBtn").removeClass('active');
        $("#diaBtn").removeClass('active');
        //var issueOut = $('output').append('Gastric')

        $('#prescBtn').click(function(event)
        {
            $('#cap1').append('Patient Name: ' + x.value + '<p>Problem: Gastric</p>');
            $('#headTable').hide();
            $('#diaTable').hide();
            $('#gasTable').show();
            $('#presc').hide();
            $('#loc').hide();
        });

        $('#backBtn').click(function(event){
            $('#issue').show();
            $('#loc').hide();

            $("#stomBtn").removeClass('active');

            $("#bashBtn").removeClass('active');
            $("#gulBtn").removeClass('active');
            $("#mirBtn").removeClass('active');

        
            $('#bashundhara').hide();
            $('#gulshan').hide();
            $('#mirpur').hide();
            $('#presc').hide();
        });
    }
    else if(event.target.innerText == "BACK PAIN"){
        
        $("#diaBtn").addClass('active');
        $("#headBtn").removeClass('active');
        $("#stomBtn").removeClass('active');
        //var issueOut = $('output').append('Gastric')
        $('#prescBtn').click(function(event)
        {
            $('#cap2').append('Patient Name: ' + x.value + '<p>Problem: Back Pain</p>');
            $('#headTable').hide();
            $('#gasTable').hide();
            $('#diaTable').show();
            $('#presc').hide();
            $('#loc').hide();
        });
        
        $('#backBtn').click(function(event){
            $('#issue').show();
            $('#loc').hide();
            
            $('#diaBtn').removeClass('active');

            $("#bashBtn").removeClass('active');
            $("#gulBtn").removeClass('active');
            $("#mirBtn").removeClass('active');


            $('#bashundhara').hide();
            $('#gulshan').hide();
            $('#mirpur').hide();
            $('#presc').hide();
        });

        
    }
    

}







