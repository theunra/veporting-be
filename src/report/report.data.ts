export enum ProductType {
  PENETRATION = 'penetration',
  VULNERABILITY = 'vulnerability',
}

export enum TestMethod {
  GREYBOX = 'greybox',
}

export enum Framework {
  CWE = 'cwe',
}

export enum ReportStatus {
  ONGOING = 'ongoing',
  DONE = 'done',
}

export function productTypeIdx(product_type: string) {
  const vals = Object.values(ProductType);
  return vals.findIndex((type) => type == product_type);
}

export function testMethodIdx(test_method: string) {
  const vals = Object.values(TestMethod);
  return vals.findIndex((type) => type == test_method);
}

export function frameworkIdx(framework: string) {
  const vals = Object.values(Framework);
  return vals.findIndex((type) => type == framework);
}
