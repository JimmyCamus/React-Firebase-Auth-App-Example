export const userReducer = (user, action) => {
  switch (action.type) {
    case "login": {
      return { ...user, ...action.user };
    }
    case "singout": {
      return {};
    }
    default: {
      throw new Error(`Unhandle action type ${action.type}`);
    }
  }
};
