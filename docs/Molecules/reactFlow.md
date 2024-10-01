---
sidebar_position: 120
---

# ReactFlow.js

Este componente FlowComponent crea y muestra un diagrama de flujo utilizando reactflow. La interfaz es totalmente responsiva, ocupando toda la ventana del navegador. Además, está preparada para manejar la adición dinámica de nuevas conexiones entre los nodos mediante la función onConnect.

```js
import React, { useCallback } from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css'
import { Stack } from "@mui/material";

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function FlowComponent () {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <Stack style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </Stack>
  );
}

export default FlowComponent;
```

## Imports

React y useCallback son importados desde React.
ReactFlow es importado desde la biblioteca reactflow para manejar la visualización del diagrama de flujo.
Stack es importado desde @mui/material para estructurar la disposición de los componentes.

## Estados y Hooks

Utiliza hooks personalizados useNodesState y useEdgesState (presumiblemente de reactflow) para gestionar los estados de los nodos y bordes.

## Callback onConnect

onConnect es una función de callback que agrega un nuevo borde cuando se conecta dos nodos en el diagrama.

## Renderizado

Renderiza un contenedor (Stack) que ocupa toda la ventana (100vw x 100vh).
Dentro del contenedor, renderiza el componente ReactFlow con los nodos y bordes iniciales.
