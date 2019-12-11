(function (){
  ceq_core.logger.logD("Running embededFunction.js");
  var myValue = 1;
  ceq.log("Set myValue to: " + myValue);

  if ( myValue == 1 )
  {
    ceq.log("Checked that value was 1");
  }
  else
  {
    ceq.log("The IF did NOT work!!!!");
  }

})();
