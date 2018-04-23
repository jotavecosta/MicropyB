'use strict';

goog.provide('Blockly.Python.upyb');

goog.require('Blockly.Python');

Blockly.Python['server'] = function(block) {
  var value_ip = Blockly.Python.valueToCode(block, 'IP', Blockly.Python.ORDER_ATOMIC);
  var value_porta = Blockly.Python.valueToCode(block, 'PORTA', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['main_func'] = function(block) {
    var statements_name = Blockly.Python.statementToCode(block, 'name');
    var code = 'def main():\n'+statements_name+'\n'+'if __name__ = \'__main__\':\n  main()\n';
    return code;
  };
  
  Blockly.Python['time_sleep'] = function(block) {
      var value_milissegundos = Blockly.Python.valueToCode(block, 'milissegundos', Blockly.Python.ORDER_ATOMIC);
     
      Blockly.Python.definitions_['import_utime'] = 'import utime';
      var code = 'utime.sleep_ms('+value_milissegundos+')\n';
      return code;
  };
  
  Blockly.Python['pin_declare'] = function(block) {
    var dropdown_type_pin = block.getFieldValue('type_pin');
    var value_num_pin = Blockly.Python.valueToCode(block, 'num_pin', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import pin';
    var code = '';
  
    switch(dropdown_type_pin){
      case 'OUT':
        code = ' PIN('+value_num_pin+', '+'Pin.OUT)'; 
        break;
      case 'IN':
        code = ' PIN('+value_num_pin+', '+'Pin.IN)';
        break;
      case 'DHT':
        Blockly.Python.definitions_['import_dht'] = 'import dht';
        code = ' dht.DHT22(Pin('+value_num_pin+'))';
        break;
      case 'PWM':
        code = ' machine.PWM(Pin('+value_num_pin+'))';
        break;
      default:
        throw 'Unknown Pin Type';
    }
    
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['pin_on'] = function(block) {
      var variable_pin_var = Blockly.Python.variableDB_.getName(block.getFieldValue('pin_var'), Blockly.Variables.NAME_TYPE);
      
      var code = variable_pin_var+'.on()\n';
      return code;
  };
  
  Blockly.Python['pin_off'] = function(block) {
      var variable_pin_var = Blockly.Python.variableDB_.getName(block.getFieldValue('pin_var'), Blockly.Variables.NAME_TYPE);
      
      var code = variable_pin_var+'.off()\n';
      return code;
    };
  
  Blockly.Python['pin_set_value'] = function(block) {
      var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
      var value_num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
      
      var code = variable_pin+'.value('+value_num+')\n';
      return code;
  };
  
  Blockly.Python['pin_get_value'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    
    var code = ''+variable_pin+'.value()';
    
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  
  Blockly.Python['pwm_freq'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    
    var code = variable_name+'.freq('+value_name+')\n';
    return code;
  };
  
  Blockly.Python['pwm_duty'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    
    var code = variable_name+'.duty('+value_name+')\n';
    return code;
  };
  
  
  Blockly.Python['dht_temp'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    
    var code = variable_name+'.temperature()';
    
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['dht_umidade'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    
    var code = variable_name+'.humidity()';
    
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['dht_medir'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    
    var code = variable_name+'.measure()\n';
    return code;
  };