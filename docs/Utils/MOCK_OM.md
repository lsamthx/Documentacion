---
sidebar_position: 162
---

# MOCK_OM.js (mocks)

Estos son ejemplos de datos simulados que podrían representar conversaciones entre usuarios y repartidores en un sistema de chat de una aplicación de entrega de alimentos. Cada objeto en la lista representa un mensaje en la conversación

```jsx 
export const MOCK_OM_CHAT_USER = [
    {
      isUser: true,
      message: 'Hola, mi pedido aún no a llegado y tiene más de 30 mins. que lo solicite',
      hourMessage: '12:10'
    }, {
      isUser: false,
      message: 'Hola, buena tarde ¿me podría proporcionar el ID de pedido?',
      hourMessage: '12:11'
    }, {
      isUser: true,
      message: 'No sé donde lo puedo encontrar',
      hourMessage: '12:12'
    }, {
      isUser: false,
      message: 'se encuentra en el chat donde solicito el servicio',
      hourMessage: '12:13'
    }, {
      isUser: true,
      message: 'ya lo encontré el ID dl pedido es c3b4a5',
      hourMessage: '12:14'
    }, {
      isUser: false,
      message: 'El Repartidor tuvo un problema mecánico con su motocicleta pero ya se dirige nuevamente a su domicilio y llegará en aproximadamente 5 mins.',
      hourMessage: '12:15'
    }
  ];
  
  export const MOCK_OM_CHAT_DRIVER = [
      {
        isUser: true,
        message: 'Tengo problemas para poder entregar mi pedido',
        hourMessage: '13:10'
      }, {
        isUser: false,
        message: 'Dime cual es tu problema',
        hourMessage: '13:11'
      }, {
        isUser: true,
        message: 'Ya entregue mi pedido y escaneé el código QR del cliente pero la aplicación no me dice que ya entregue el pedido.',
        hourMessage: '13:11'
      }, {
        isUser: false,
        message: '¿Cuál es tu ID de repartidor y cuál es el ID del pedido?',
        hourMessage: '13:11'
      }, {
        isUser: true,
        message: 'Mi ID es R1e2p3t4d5o6 y el ID dl pedido es c3b4a5',
        hourMessage: '13:12'
      }, {
        isUser: false,
        message: 'En un momento tramito tu pedido para que quede registrado como entregado.',
        hourMessage: '13:15'
      }
    ];
```