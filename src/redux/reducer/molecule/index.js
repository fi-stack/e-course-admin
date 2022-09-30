const stateMolecules = {
  molecules: [],
};

const stateMolecule = {
  molecule: {},
};

const molecules = (state = stateMolecules, action) => {
  if (action.type === "GET_MOLECULES") {
    return {
      ...state,
      molecules: action.payload,
    };
  }

  return state;
};

const molecule = (state = stateMolecule, action) => {
  if (action.type === "GET_MOLECULE") {
    return {
      ...state,
      molecule: action.payload,
    };
  }

  return state;
};

export { molecules, molecule };
