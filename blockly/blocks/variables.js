/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Variable blocks for Blockly.

 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.variables');  // Deprecated.
goog.provide('Blockly.Constants.Variables');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 * Should be the same as Blockly.Msg.VARIABLES_HUE.
 * @readonly
 */
Blockly.Constants.Variables.HUE = 330;
/** @deprecated Use Blockly.Constants.Variables.HUE */
Blockly.Blocks.variables.HUE = Blockly.Constants.Variables.HUE;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  //bloco para declarar o pino
  {
    "type": "pin_declare",
    "message0": "Pino %1 %2 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "type_pin",
        "options": [
          [
            "OUT",
            "OUT"
          ],
          [
            "IN",
            "IN"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "num_pin",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  //Bloco para ligar o pino
  {
    "type": "pin_on",
    "message0": "Ligar %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "pin_var",
        "variable": "item"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  // Bloco para desligar o pino
  {
    "type": "pin_off",
    "message0": "Desligar %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "pin_var",
        "variable": "item"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },

  // Bloco para time sleep
  {
    "type": "time_sleep",
    "message0": "Suspender por %1 Milissegundos",
    "args0": [
      {
        "type": "input_value",
        "name": "milissegundos",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bloco de declaração de um PWM
  {
    "type": "pwm_declaration",
    "message0": "pino para PWM %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "item"
      }
    ],
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bloco para duty do pwm
  {
    "type": "pwm_duty",
    "message0": "Taxa do pwm %1 = %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "item"
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },

  //bloco para medir
  {
    "type": "dht_medir",
    "message0": "medir dados em %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "item"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bloco para declaração do dht
  {
    "type": "dht_declaration",
    "message0": "DHT %1 no pino %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "11",
            "11"
          ],
          [
            "22",
            "22"
          ]
        ]
      },
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "item"
      }
    ],
    "output": null,
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bloco para medir temperatura
  {
    "type": "dht_temp",
    "message0": "Temperatura obtida por %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "item"
      }
    ],
    "output": null,
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },

  //bloco para exibição de strings
  {
    "type": "print",
    "message0": "Imprimir %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "texto"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },

  //bloco para medir umidade
  {
    "type": "dht_umidade",
    "message0": "Umidade obtida por %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "item"
      }
    ],
    "output": null,
    "colour": 150,
    "tooltip": "",
    "helpUrl": ""
  },


  //Bloco para frequencia do pwm
  {
    "type": "pwm_freq",
    "message0": "Frequência do PWM %1 = %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "item"
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bloco para obter valor no pino
  {
    "type": "pin_get_value",
    "message0": "Obter valor no pino %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "pin",
        "variable": "item"
      }
    ],
    "output": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bloco para ajustar o valor do pino
  {
    "type": "pin_set_value",
    "message0": "Valor do pino %1 %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "pin",
        "variable": "item"
      },
      {
        "type": "input_value",
        "name": "num",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "Pin.Value",
    "helpUrl": ""
  },

  // Block for variable getter.
  {
    "type": "variables_get",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
      }
    ],
    "output": null,
    "colour": "%{BKY_VARIABLES_HUE}",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
    "extensions": ["contextMenu_variableSetterGetter"]
  },
  // Block for variable setter.
  {
    "type": "variables_set",
    "message0": "%{BKY_VARIABLES_SET}",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_VARIABLES_HUE}",
    "tooltip": "%{BKY_VARIABLES_SET_TOOLTIP}",
    "helpUrl": "%{BKY_VARIABLES_SET_HELPURL}",
    "extensions": ["contextMenu_variableSetterGetter"]
  }
]);  // END JSON EXTRACT (Do not delete this comment.)

/**
 * Mixin to add context menu items to create getter/setter blocks for this
 * setter/getter.
 * Used by blocks 'variables_set' and 'variables_get'.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    // Getter blocks have the option to create a setter block, and vice versa.
    if (this.type == 'variables_get') {
      var opposite_type = 'variables_set';
      var contextMenuMsg = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    } else {
      var opposite_type = 'variables_get';
      var contextMenuMsg = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    }

    var option = {enabled: this.workspace.remainingCapacity() > 0};
    var name = this.getFieldValue('VAR');
    option.text = contextMenuMsg.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', opposite_type);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Extensions.registerMixin('contextMenu_variableSetterGetter',
  Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);
