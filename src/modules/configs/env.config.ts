export const envConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
});
