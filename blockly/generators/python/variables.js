/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Python for variable blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Python.variables');

goog.require('Blockly.Python');


Blockly.Python['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_NONE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + '\n';
};

Blockly.Python['time_sleep'] = function(block) {
    var value_milissegundos = Blockly.Python.valueToCode(block, 'milissegundos', Blockly.Python.ORDER_ATOMIC);
   
    Blockly.Python.definitions_['import_utime'] = 'import utime';
    var code = 'utime.sleep_ms('+value_milissegundos+')\n';
    return code;
};

Blockly.Python['pin_on'] = function(block) {
    var variable_pin_var = Blockly.Python.variableDB_.getName(block.getFieldValue('pin_var'), Blockly.Variables.NAME_TYPE);
    var value_pin_num = Blockly.Python.valueToCode(block, 'pin_num', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import pin';
    Blockly.Python.definitions_['pin_on_declaration'] = variable_pin_var+' = PIN('+value_pin_num+', Pin.OUT)';
    var code = variable_pin_var+'.on()\n';
    return code;
};

Blockly.Python['pin_off'] = function(block) {
    var variable_pin_var = Blockly.Python.variableDB_.getName(block.getFieldValue('pin_var'), Blockly.Variables.NAME_TYPE);
    var value_pin_num = Blockly.Python.valueToCode(block, 'pin_num', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import pin';
    Blockly.Python.definitions_['pin_out_declaration'] = variable_pin_var+' = PIN('+value_pin_num+', Pin.OUT)';
    var code = variable_pin_var+'.off()\n';
    return code;
  };

Blockly.Python['pin_out'] = function(block) {
    var value_pin_num = Blockly.Python.valueToCode(block, 'pin_num', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = pin_var+' = PIN('+pin_num+', PIN.OUT)\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};