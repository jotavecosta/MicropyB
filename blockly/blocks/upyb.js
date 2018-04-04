'use strict';

goog.provide('Blockly.Blocks.upyb');  // Deprecated.
goog.provide('Blockly.Constants.Upyb');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    //Main function
  {
    "type": "main_func",
    "message0": "Função Principal %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "name"
      }
    ],
    "colour": 330,
    "tooltip": "O código começará a ser executado por esta função",
    "helpUrl": ""
  },
  
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
          ],
          [
            "DHT",
            "DHT"
          ],
          [
            "PWM",
            "PWM"
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
  }
]);