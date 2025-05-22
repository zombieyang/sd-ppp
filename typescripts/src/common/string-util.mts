export function simplifyWorkflowPath(path: string) {
    return path.replace(/^workflows\//, '').replace(/\.json$/, '').split('://').pop();
}