'use strict';

goog.provide('Blockly.Python.upyb');

goog.require('Blockly.Python');


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
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
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

  Blockly.Python['readline'] = function(block) {
    var value_file = Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_file+'.readline()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['server'] = function(block) {
    var value_addr = Blockly.Python.valueToCode(block, 'ADDR', Blockly.Python.ORDER_ATOMIC);
    var value_porta = Blockly.Python.valueToCode(block, 'PORTA', Blockly.Python.ORDER_ATOMIC);
    var checkbox_debug = block.getFieldValue('debug') == 'TRUE';
    var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
    var statements_loop = Blockly.Python.statementToCode(block, 'LOOP');

    Blockly.Python.definitions_['import_socket'] = 'import socket';

    var code = 'def servidor():\n'+
               '  addr = socket.getaddrinfo('+value_addr+', '+ value_porta+')[0][-1]\n'+
               '  s = socket.socket()\n'+
               '  s.bind(addr)\n'+
               '  s.listen(1)\n';
    if(checkbox_debug)
      code +=  '  print(\'Escutando em: \', addr)\n';
     
    code +=    '  while '+value_condition+':\n  ';

    var newString = statements_loop.replace(/\n/g, '\n  ');
    code += newString;

    return code;
  };

  Blockly.Python['socket_accept'] = function(block) {
    
    var code = 's.accept()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['makefile'] = function(block) {
    var value_conexao = Blockly.Python.valueToCode(block, 'conexao', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_conexao+'.makefile(\'rwb\', 0)';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['send_data'] = function(block) {
    var value_conexao = Blockly.Python.valueToCode(block, 'conexao', Blockly.Python.ORDER_ATOMIC);
    var value_buffer = Blockly.Python.valueToCode(block, 'buffer', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_conexao+'.send('+value_buffer+')\n';
    return code;
  };

  Blockly.Python['close_conection'] = function(block) {
    var value_conexao = Blockly.Python.valueToCode(block, 'conexao', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_conexao+'.close()\n';
    return code;
  };

  Blockly.Python['wifi'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
    var value_password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);
    var dropdown_wifimod = block.getFieldValue('wifimod');
    // TODO: Assemble Python into code variable.
    var code = 'def conectar(essid= '+value_name+', password= '+value_password+'):\n'+
               '  wlan = network.WLAN(STA_IF)\n'+
               '  wlan.active(True)\n'+
               '  if no wlan.isconnected():\n'+
               '    wlan.connect(essid, password)\n'+
               '    while not wlan.isconnected():\n'+
               '      pass\n'+
               '  print(\'Configuração da rede: \', wlan.ifconfig())\n';
    return code;
  };