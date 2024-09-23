interface Entity {
  slug: string;
}

/**
 * Creates a function to fetch an entity by its slug from a provided array of entities.
 */
export function getEntityBySlug<T extends Entity>(allEntities: readonly T[]) {
  return (slug: string): T | undefined => {
    return allEntities.find(
      (entity) => entity.slug.toLowerCase() === slug.toLowerCase(),
    );
  };
}

/**
 * Creates a function to find an entity based on a provided predicate function from a given array of entities.
 */
export function findEntity<T>(allEntities: readonly T[]) {
  return (predicate: (entity: T) => boolean): T | undefined => {
    return allEntities.find(predicate);
  };
}

/**
 * Creates a function to list all entities or filters them based on the provided filter function.
 */
export function listEntities<T>(allEntities: readonly T[]) {
  return (predicate?: (entity: T) => boolean): T[] => {
    if (predicate) {
      return allEntities.filter(predicate);
    }
    return allEntities as T[];
  };
}
