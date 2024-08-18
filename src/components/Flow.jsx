import React, { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ConnectionNode from "./nodes/ConditionNode";
import MessageNode from "./nodes/MessageNode";
import { useDispatch, useSelector } from "react-redux";
import {
  addEdge,
  addNode,
  updateEdges,
  updateNodes,
} from "../store/reducers/node";

const nodeTypes = { textUpdater: MessageNode, connection: ConnectionNode };

const Flow = () => {
  const dispatch = useDispatch();
  const reduxNodes = useSelector((state) => state.nodes.nodes);
  const reduxEdges = useSelector((state) => state.nodes.edges);

  const [edges, setEdges] = useEdgesState(reduxEdges);

  const [nodes, setNodes] = useNodesState(reduxNodes);

  const addFlowEdge = (connection, edges) => {
    const existingEdge = edges.find((edge) => edge.id === connection.id);
    if (!existingEdge) {
      console.log({ edges, connection });
      return [...edges, connection];
    }
    return edges;
  };

  const onNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));

      dispatch(updateNodes(applyNodeChanges(changes, reduxNodes)));
    },
    [dispatch, setNodes, reduxNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => {
      const updatedEdges = applyEdgeChanges(changes, edges);
      setEdges(updatedEdges);

      console.log({ updatedEdges });
      dispatch(updateEdges(updatedEdges));
    },
    [dispatch, edges, setEdges]
  );

  const onConnect = useCallback(
    (connection) => {
      setEdges((eds) => {
        const existingEdge = eds.find((edge) => edge.id === connection.id);
        if (!existingEdge) {
          return [...eds, connection];
        }
        return eds;
      });

      dispatch(addEdge(connection));
    },
    [dispatch, setEdges]
  );

  return (
    <div className="w-full h-full p-5">
      <ReactFlow
        nodes={reduxNodes}
        edges={reduxEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default Flow;
