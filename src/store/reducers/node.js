import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nodes: [
    // {
    //   id: "1",
    //   position: { x: 150, y: 150 },
    //   data: { id: "1", label: "1", value: 123, inputType: null },
    // },
    // {
    //   id: "2",
    //   position: { x: 400, y: 400 },
    //   data: { id: "2", label: "2", inputType: null },
    // },
  ],
  edges: [],
};

const nodesSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNode: (state, action) => {
      const newNode = {
        id: (state.nodes.length + 1).toString(),
        type: action.payload || "textUpdater",
        position: {
          x: Math.random() * 400,
          y: Math.random() * 400,
        },
        data: {
          id: (state.nodes.length + 1).toString(),

          label: `Node ${state.nodes.length + 1}`,
          value: "",
          inputType: null,
        },
      };

      state.nodes.push(newNode);
      // if (state.nodes.length > 1) {
      //   state.edges.push({
      //     id: `e${newNode.id}-1`,
      //     source: newNode.id,
      //     target: state.nodes[0].id,
      //   });
      // }
    },
    addEdge: (state, action) => {
      const { source, target } = action.payload;

      const existingEdgesFromSource = state.edges.filter(
        (edge) => edge.source === source
      );

      const edgeExists = existingEdgesFromSource.some(
        (edge) => edge.target === target
      );

      if (!edgeExists) {
        state.edges.push({
          ...action.payload,
          id: (state.edges.length + 1).toString(),
        });
      }
    },
    updateNodes: (state, action) => {
      state.nodes = action.payload;
    },
    updateEdges: (state, action) => {
      state.edges = action.payload;
    },
    deleteEdges: (state, action) => {
      const nodeId = action.payload;

      state.nodes = state.nodes.filter((node) => node.id !== nodeId);
      state.edges = state.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      );
    },
  },
});

export const { addNode, addEdge, updateNodes, updateEdges, deleteEdges } =
  nodesSlice.actions;
export default nodesSlice.reducer;
