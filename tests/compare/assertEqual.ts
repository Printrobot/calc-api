export function assertEqual(obj1: any, obj2: any): boolean {
  if (typeof obj1 == "number" && typeof obj2 == "number") {
    return Math.abs(obj1 - obj2) < 0.0001
}
    if (obj1 === obj2) return true;
  
    if (obj1 == null || typeof obj1 != "object" ||
        obj2 == null || typeof obj2 != "object") return false;
  
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
  
    if (keys1.length != keys2.length) return false;
  
    for (let key of keys1) {
      if (!keys2.includes(key) || !assertEqual(obj1[key], obj2[key])) return false;
    }
  
    return true;
  }