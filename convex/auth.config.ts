export default {
    providers: [
        {
            domain: process.env.CONVEX_CLERK_ISSUER!,
            applicationID: "convex",
        },
    ]
};