---
sidebar_position: 108
---

# FlowComponent.js

El componente FlowComponent crea una interfaz interactiva para construir y visualizar flujos de trabajo. Permite añadir, conectar y gestionar nodos visualmente. Utiliza reactflow para manejar la lógica del flujo y @mui/material para algunos elementos de diseño.

```js
import React, { useCallback, useRef } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Background,
  MiniMap,
  Controls,
} from 'reactflow';
import { Stack } from '@mui/material';

import 'reactflow/dist/style.css';
 
const initialNodes = [
  {
    id: '0',
    type: 'input',
    data: { label: 'Incoming message' },
    position: { x: 0, y: 50 },
  },
  {
    id: '1',
    type: 'input',
    data: { label: 'Incoming Call' },
    position: { x: 30, y: 50 },
  },
  {
    id: '2',
    type: 'input',
    data: { label: 'Conversation' },
    position: { x: 60, y: 50 },
  },
  {
    id: '3',
    type: 'input',
    data: { label: 'REST API' },
    position: { x: 90, y: 50 },
  },
  {
    id: '3',
    type: 'input',
    data: { label: 'Sub flow' },
    position: { x: 120, y: 50 },
  },
];

let id = 1;
const getId = () => `${id++}`;

function FlowComponent () {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback(
    (params) => {
      // reset the start node on connections
      connectingNodeId.current = null;
      setEdges((eds) => addEdge(params, eds))
    },
    [],
  );

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id }),
        );
      }
    },
    [screenToFlowPosition],
  );

  const minimapStyle = {
    height: 120,
  };

  return (
    <div ref={reactFlowWrapper} style={{ width: '100%', height: '80vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      >
        <Controls />
        <MiniMap style={minimapStyle} zoomable pannable />
        <Background color="#000000" gap={12} />
      </ReactFlow>
    </div>
  );
}

export default () => (
  <ReactFlowProvider>
    <FlowComponent />
  </ReactFlowProvider>
);
```

## Imports

ReactFlow y varios hooks relacionados se importan desde la librería reactflow.
Stack se importa desde @mui/material para posibles usos de diseño (aunque no se utiliza en el código dado).
La hoja de estilos de reactflow se importa para estilizar los componentes de flujo.

## Datos Iniciales y Variables

**initialNodes**: Define los nodos iniciales del flujo con su id, type, data, y position.
**id**: Es una variable de contador utilizada para generar nuevos IDs únicos.
**getId**: Es una función que incrementa y devuelve el contador id.

## Componente FlowComponent

**reactFlowWrapper**: Es una referencia al contenedor principal del flujo.
**connectingNodeId**: Es una referencia que almacena el ID del nodo de origen en una conexión.
**nodes, setNodes, onNodesChange**: Gestionan el estado de los nodos.
**edges, setEdges, onEdgesChange**: Gestionan el estado de las aristas.
**screenToFlowPosition**: Es una función que convierte posiciones de pantalla a posiciones del flujo.

## Función para Manejar la Conexión

onConnect se llama cuando se completa una conexión entre nodos.
Resetea el nodo de origen y añade la arista al estado.

## Funciones para Iniciar y Terminar Conexiones

**onConnectStart**: Guarda el ID del nodo de origen cuando empieza una conexión.
**onConnectEnd**: Añade un nuevo nodo y una arista al flujo si la conexión termina en un área vacía del contenedor (react-flow__pane).

## Estilo del MiniMapa

minimapStyle define la altura del MiniMapa.

## Renderización del Componente

El componente principal se renderiza dentro de un div referenciado por reactFlowWrapper con estilo de ancho completo y altura del 80% de la vista.

ReactFlow se configura con nodos, aristas, y manejadores de eventos para nodos y aristas.
Controls, MiniMap, y Background son componentes adicionales para interactuar con el flujo.
El componente se envuelve en ReactFlowProvider para proporcionar el contexto necesario.
