// Mock auth function for temporary use without Clerk
export const auth = () => {
  return Promise.resolve({ userId: null });
};
