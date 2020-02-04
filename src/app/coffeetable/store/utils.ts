export function getEntityName(root: string) {
  const name: {[key: string]: string} = {};
  name.single = root;
  name.plural = `${root}s`;
  name.Single = `${root.substring(0, 1).toUpperCase()}${root.substring(1)}`;
  name.Plural = `${name.Single}s`;
  return name;
}
