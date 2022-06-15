declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    const value: any;
    export = value;
}

declare module "*.png" {
    const value: any;
    export = value;
}