import slugify from "slugify";

export const createWorkoutSlug = (name: string) => slugify(name, {
    lower: true,
    strict: true,
    trim: true
})
