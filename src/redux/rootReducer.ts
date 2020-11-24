import usersReducer from './UsersSlice';

const rootReducer = usersReducer;

// Root state type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
