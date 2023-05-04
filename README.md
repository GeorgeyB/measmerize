# Measmerize Software Engineering Technical Assessment

## Steps to run

1. Run `npm install` to install dependencies
2. Run `npm run build` to transpile JavaScript
3. Run `npm run` with an input and output path relative to the app directory, for example  
`npm run input/nodes.json output/node-tree.json`


## Notes
- This application assumes all node IDs are unique
- There is no safeguard against circular node references