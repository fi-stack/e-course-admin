const stateAtoms = {
  atoms: [],
};

const stateAtom = {
  atom: {},
};

const atoms = (state = stateAtoms, action) => {
  if (action.type === "GET_ATOMS") {
    return {
      ...state,
      atoms: action.payload,
    };
  }

  return state;
};

const atom = (state = stateAtom, action) => {
  if (action.type === "GET_ATOM") {
    return {
      ...state,
      atom: action.payload,
    };
  }

  return state;
};

export { atoms, atom };
