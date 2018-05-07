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
    "colour": 0,
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

  //Bloco readline
  {
    "type": "readline",
    "message0": "Ler linha de %1",
    "args0": [
      {
        "type": "input_value",
        "name": "file"
      }
    ],
    "output": null,
    "colour": 165,
    "tooltip": "",
    "helpUrl": ""
  },

  //Bloco de criação de servidor
  {
    "type": "server",
    "message0": "Criar servidor em %1 Endereço %2 Porta %3 Debug %4 %5 Enquanto %6 Faça %7",
    "args0": [
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "ADDR",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "PORTA",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_checkbox",
        "name": "debug",
        "checked": true
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "condition",
        "check": "Boolean",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "LOOP",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "colour": 315,
    "tooltip": "",
    "helpUrl": ""
  },

  //Aceitar conexão
  {
    "type": "socket_accept",
    "message0": "Aceitar conexão",
    "output": null,
    "colour": 315,
    "tooltip": "",
    "helpUrl": ""
  },

  //makefile
  {
    "type": "makefile",
    "message0": "Criar arquivo a partir de %1",
    "args0": [
      {
        "type": "input_value",
        "name": "conexao"
      }
    ],
    "output": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },

  //enviar dados
  {
    "type": "send_data",
    "message0": "Enviar dados de %1 para %2",
    "args0": [
      {
        "type": "input_value",
        "name": "conexao"
      },
      {
        "type": "input_value",
        "name": "buffer"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315,
    "tooltip": "",
    "helpUrl": ""
  },

  //Encerrar sessão
  {
    "type": "close_conection",
    "message0": "Encerrar conexão em %1",
    "args0": [
      {
        "type": "input_value",
        "name": "conexao"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 315,
    "tooltip": "",
    "helpUrl": ""
  },

  //conectar a wifi
  {
    "type": "wifi",
    "lastDummyAlign0": "RIGHT",
    "message0": "Conectar a rede WIFI %1 SSID %2 Senha %3 Modo %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "name",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "password",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "wifimod",
        "options": [
          [
            "Estação",
            "station"
          ],
          [
            "Ponto de Acesso",
            "acesspoint"
          ]
        ]
      }
    ],
    "inputsInline": false,
    "colour": 315,
    "tooltip": "",
    "helpUrl": ""
  }
]);