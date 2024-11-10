/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dfCredentials: {
        url: 'postgresql://forSnapGen_1_owner:d4GpK7UnYCgR@ep-royal-salad-a5g6vc3f.us-east-2.aws.neon.tech/forSnapGen_1?sslmode=require',
    }
};